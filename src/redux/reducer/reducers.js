/* eslint-disable default-case */
import { CREATE_TEAM } from "../contstants"
const initialState={
    teamData:[]
}
export default function TeamMembers(state=initialState,action){
switch(action.type){
    case CREATE_TEAM:
        return{
            ...state,
            teamData:action.payload
        }
        break;
        default:
            return state
}
}