export async function readFileContent(filePath: string): Promise<string> {
    try {
        const response = await fetch(filePath, {
            headers: {
                'Accept': 'text/markdown,text/plain,*/*',
            },
            mode: 'cors',
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const content = await response.text();
        
        return content;
    } catch (error:any) {
        console.error('Fetch error details:', error);
        throw new Error(`Error reading the file: ${error.message}`);
    }
}
