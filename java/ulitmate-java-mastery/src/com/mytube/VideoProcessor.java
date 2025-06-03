package com.mytube;

public class VideoProcessor {
    private VideoEncodable encoder;
    private VideoStorable database;
    private Notification notification;

    VideoProcessor(VideoEncodable encoder, VideoStorable database, Notification notification) {
        this.encoder = encoder;
        this.database = database;
        this.notification = notification;
    }

    public void process(Video video) {
        encoder.encode(video);

        database.store(video);
        notification.notify(video.getUser());
    }
}
