import type {Grid} from "~/types/grid";
import type {RouteDto} from "shared";

/**
 * Persists the grid to the backend.
 * @param grid - The grid you want to persist.
 */
export async function useGridSave(grid: Grid) {
    await $fetch<RouteDto>(
        `/api/trips/${grid.tripId}`,
        {
            method: "PATCH",
            body: {
                layout: grid
            }
        }
    )
}



