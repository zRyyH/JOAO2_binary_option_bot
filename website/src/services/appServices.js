import axios from "axios";

export async function loginService(url, path, trader_id, influencer, event_type) {
    try {
        const response = await axios.get(url + path, {
            params: {
                trader_id: trader_id,
                postback_name: influencer,
                event_type: event_type
            }
        });

        if (response.status === 200) return true
        
    } catch {
        return false
    }
}