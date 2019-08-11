import ITwitchClip from './ITwitchClip'

class TwitchClipModel {
    slug : string;
    tracking_id : string;
    url: string;
    embed_url: string;
    embed_html: string;
    broadcaster: {
        id: string;
        name: string;
        display_name: string;
        channnel_url: string;
        logo: string
    };
    curator: {
        id: string;
        name: string;
        channel_name: string;
        logo: string
    };
    vod: {
        id: string;
        url: string;
        offset: number;
        preview_image_url: string
    };
    broadcast_id: string;
    game: string;
    language: string;
    title: string;
    views: number;
    duration: number;
    created_at: string;
    thumbnails: {
        medium: string;
        small: string;
        tiny: string
    } 
    constructor(data : ITwitchClip) {
      this.slug = data.slug;
      this.tracking_id = data.tracking_id;
      this.url = data.url;
      this.embed_url = data.embed_url;
      this.embed_html = data.embed_html;

      this.broadcaster = data.broadcaster;
      this.broadcaster.id = data.broadcaster.id;
      this.broadcaster.name = data.broadcaster.name;
      this.broadcaster.display_name = data.broadcaster.display_name;
      this.broadcaster.channnel_url = data.broadcaster.channnel_url;
      this.broadcaster.logo = data.broadcaster.logo;
      
      this.curator = data.curator;
      this.curator.id = data.curator.id;
      this.curator.name = data.curator.name;
      this.curator.channel_name = data.curator.channel_name;
      this.curator.logo = data.curator.logo;

      this.vod = data.vod;
      this.vod.id = data.vod.id;
      this.vod.url = data.vod.url;
      this.vod.offset = data.vod.offset;
      this.vod.preview_image_url = data.vod.preview_image_url;

      this.broadcast_id = data.broadcast_id;
      this.game = data.game;
      this.language = data.language;
      this.title = data.title;
      this.views = data.views;
      this.duration = data.duration;
      this.created_at = data.created_at;

      this.thumbnails = data.thumbnails;
      this.thumbnails.medium = data.thumbnails.medium;
      this.thumbnails.small = data.thumbnails.small;
      this.thumbnails.tiny = data.thumbnails.tiny;
    }
  }
  
  export default TwitchClipModel;