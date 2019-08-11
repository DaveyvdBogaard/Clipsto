// interface ITwitchClip extends React.Props<any>{
//     slug : string,
//     tracking_id : string,
//     url?: string,
//     embed_url?: string,
//     embed_html?: string,
//     broadcaster?: {
//         id?: string,
//         name?: string,
//         display_name?: string,
//         channnel_url?: string,
//         logo?: string
//     },
//     curator?: {
//         id?: string,
//         name?: string,
//         channel_name?: string,
//         logo?: string
//     },
//     vod?: {
//         id?: string,
//         url?: string,
//         offset?: number,
//         preview_image_url?: string
//     },
//     broadcast_id?: string,
//     game?: string,
//     language?: string,
//     title?: string,
//     views?: number,
//     duration?: number,
//     created_at?: string,
//     thumbnails: {
//         medium: string,
//         small: string,
//         tiny: string
//     } 
// }
interface ITwitchClip extends React.Props<any>{
    slug : string,
    tracking_id : string,
    url: string,
    embed_url: string,
    embed_html: string,
    broadcaster: {
        id: string,
        name: string,
        display_name: string,
        channnel_url: string,
        logo: string
    },
    curator: {
        id: string,
        name: string,
        channel_name: string,
        logo: string
    },
    vod: {
        id: string,
        url: string,
        offset: number,
        preview_image_url: string
    },
    broadcast_id: string,
    game: string,
    language: string,
    title: string,
    views: number,
    duration: number,
    created_at: string,
    thumbnails: {
        medium: string,
        small: string,
        tiny: string
    } 
}

export default ITwitchClip