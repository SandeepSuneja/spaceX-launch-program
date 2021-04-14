export interface SpaceXLaunchProgram {
    launch_year?: string;
    launch_success?: boolean;
    mission_name?: string;
    flight_number?: number;
    mission_id?: number[];
    cores_land_success?: [{
        core_serial?:string;
        land_success?: boolean;
    }];
    rocket?: {
        first_stage?:{
            cores?:[{
                    core_serial?:string;
                    land_success?:boolean;
            }];
        }
    };
    links?:{
        mission_patch?: string;
    };
}
