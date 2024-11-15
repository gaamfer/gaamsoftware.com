"use client";

// pages/project/[id].js
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { API_URL } from '@/services/info'; // Assuming you have an API URL

// interface para project
interface Project{
    header: string;
    info: string;
    project_pic: string | null;
}

export default function Project() {

  const { id } = useParams(); // Get the dynamic ID from the URL
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (id) {
      async function fetchProject() {
        try {
          const response = await fetch(`${API_URL}/projects/${id}/`);
          const data = await response.json();
          setProject(data);
        } catch (error) {
          console.error('Error fetching project:', error);
        }
      }

      fetchProject();
    }
  }, [id]); // Re-fetch data if `id` changes

  if (!project) {
    return <p>Loading project...</p>;
  }

  return (
    <>
      <div>
        <h1>{project.header}</h1>
        <p>{project.info}</p>
        <img src={project.project_pic ?? ''} alt={project.header} />
      </div>    
    </>
  );
}
