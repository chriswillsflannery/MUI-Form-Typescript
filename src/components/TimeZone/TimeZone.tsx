import { useEffect, useState, useCallback, Dispatch, SetStateAction } from 'react';
import { InputLabel, MenuItem, Select } from '@mui/material';

import { URL } from '../../constants/timezone';

interface TimeZoneProps {
    timezone: string;
    setTimezone: Dispatch<SetStateAction<string>>;
}

export const TimeZone: React.FunctionComponent<TimeZoneProps> = ({
    timezone,
    setTimezone
}) => {
    const [isFetchingZones, setIsFetchingZones] = useState<boolean>(false);
    const [zones, setZones] = useState<string[]>([]);

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
        <>
            <InputLabel>Time Zone</InputLabel>
            <Select
                value={timezone || "Africa/Abidjan"}
                onChange={(e: any) => setTimezone(e.target.value)}
                disabled={isFetchingZones}
                sx={{ marginBottom: '16px' }}
            >
                {!isFetchingZones && (
                    zones.map((zone, idx) => (
                        <MenuItem key={idx} value={zone}>
                            {zone}
                        </MenuItem>
                    ))
                )}
            </Select>
        </>
    );
};