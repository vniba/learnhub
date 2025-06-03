package com.mytube;

public class AVVideoEncoder implements VideoEncodable {

    @Override
    public void encode(Video video) {
        System.out.println("Encoding video...");
        System.out.println("Done!\n");
    }
}
