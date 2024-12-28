import { useEffect, useState } from "react";
import { readFileContent } from "@/services/tools";
import ReactMarkdown from 'react-markdown';

interface PostProps {
    fileUrl: string;
}

export function PostLegacy({ fileUrl }: PostProps) {
    const [content, setContent] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!fileUrl) {
            setError('No file URL provided');
            return;
        }

        async function fetchContent() {
            setIsLoading(true);
            try {
                console.log('Fetching from URL: ', fileUrl); //Debug log
                const data = await readFileContent(fileUrl);
                setContent(data);
            } catch (err: any) {
                console.error('Fetch error: ', err); // Debug log
                setError(`Failed to load content: ${err.message}`);
            } finally {
                setIsLoading(false);
            }
        }
        fetchContent();
    }, [fileUrl]);

    if(isLoading) {
        return <div className="loading">Loading content...</div>;
    }

    if (error) {
        return (
            <div className="error-message">
                <p>Error loading content: {error}</p>
                <p>URL attempted: {fileUrl}</p>
            </div>
        );
    }

    return (
        <div className="prose prose-invert max-w-none">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
}