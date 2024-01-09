import { createAction, props } from "@ngrx/store";
import { Organisation } from "src/app/core/models/organisation.interface";
import { Project } from "src/app/core/models/project.interface";

export const fetchOrganisationInit = createAction(
    "[GET_ORGANISATION_Init] get organisation"
)

export const fetchOrganisationOnSuccess = createAction(
    "[GET_ORGANISATION_SUCCESS] organisation fetched successfully",
    props<{organisation : Organisation}>()
)

export const fetchOrganisationOnFail = createAction(
    "[GET_ORGANISATION_FAILED] organisation fetch failed",
    props<{error : any}>()
)

export const fetchAllProjectsInit = createAction(
    "[GET_ALL_PROJECTS_Init] get projects of organisation"
)

export const fetchAllProjectsOnSuccess = createAction(
    "[GET_ALL_PROJECTS_ON_SUCCESS] organisation projects fetched successfully",
    props<{projects : Project[]}>()
)

export const fetchAllProjectsOnFail = createAction(
    "[GET_ALL_PROJECTS_ON_SUCCESS] organisation projects fetched successfully",
    props<{error : any}>()
)