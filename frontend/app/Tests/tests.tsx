import { ProjectsData, PostsData, CategoriesData } from "@/services/info";

export function TestProjectsData(){
    ProjectsData().then((data) => {
        console.log(data);
    });
}