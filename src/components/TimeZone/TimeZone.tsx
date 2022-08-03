import { useEffect, useState, useCallback, Dispatch, SetStateAction } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SxProps } from '@mui/material';

import { URL } from '../../constants/timezone';

interface TimeZoneProps {
    timezone: string;
    setTimezone: Dispatch<SetStateAction<string>>;
    sx: SxProps;
}

export const TimeZone: React.FunctionComponent<TimeZoneProps> = ({
    timezone,
    setTimezone,
    sx,
}) => {
    const [isFetchingZones, setIsFetchingZones] = useState<boolean>(false);
    const [zones, setZones] = useState<string[]>([]);

    // The prompt required a fetch to GET time zone data but in practice I do not think this is a good idea.
    // If the fetch fails we are left with an unusable form input.
    // A better pattern would be to hardcode a list of available regions in CONSTs.
    const fetchZones = useCallback(async () => {
        setIsFetchingZones(true);
        try {
            const response = await fetch(`${URL}`)
                .then(res => res.json());
            setZones(response);
            setIsFetchingZones(false);
        } catch (err) {
            setZones([]);
            console.error(err);
            setIsFetchingZones(false);
        }
    }, []);

    useEffect(() => {
        fetchZones();
    }, [fetchZones]);

    return (
        <FormControl>
            <InputLabel>Time Zone</InputLabel>
            <Select
                value={timezone}
                onChange={(e: any) => setTimezone(e.target.value)}
                disabled={isFetchingZones}
                sx={sx}
            >
                {!isFetchingZones && (
                    zones.map((zone, idx) => (
                        <MenuItem key={idx} value={zone}>
                            {zone}
                        </MenuItem>
                    ))
                )}
            </Select>
        </FormControl>
    );
};