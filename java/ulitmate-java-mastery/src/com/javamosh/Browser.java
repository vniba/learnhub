package com.javamosh;

class Browser {

    public void navigate(String address) {

        String ip = findIpAddress(address);
        String html = sendHttpRequest(ip);
        System.out.println(html);
    }

    private String sendHttpRequest(String ip) {
        return "<html>\uD83D\uDC0D</html>";
    }

    private String findIpAddress(String address) {
        return "0.0.0.0";
    }
}