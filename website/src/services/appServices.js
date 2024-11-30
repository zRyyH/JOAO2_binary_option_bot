import axios from "axios";

export async function loginService(url, path, trader_id, influencer) {
    try {
        const response = await axios.get(url + path, {
            params: {
                trader_id: trader_id,
                postback_name: influencer,
                event_type: 'REGISTRO'
            }
        });

        if (response.status == 200) return true

    } catch {
        return false
    }
}