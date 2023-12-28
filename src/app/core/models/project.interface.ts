export interface Project {
    id: number;
    member:boolean;
    name:string;
    numberOfSubProjects:number;
    parentProjectId:number | null;
    slug:string;
    taskTeamId:number | null;
    teamSize:number;
}