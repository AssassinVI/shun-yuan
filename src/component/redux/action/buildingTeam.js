import { anchorBuildingTeam } from "../type"
export const moveToBuildingTeam = (team) => {
    return {
        type: anchorBuildingTeam,
        payload: team
    }
}


