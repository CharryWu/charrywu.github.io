# Trimming video w/ audio
Reference: https://shotstack.io/learn/use-ffmpeg-to-trim-video/  

## Cut using a specific time
`-ss` specifies the start time, while `-to` specifies the end time
```sh
ffmpeg -i input.mp4 -ss 00:05:10 -to 00:15:30 -c:v copy -c:a copy output.mp4
```

## Cut using a duration
`-ss` specifies the start time, while `-t` specifies the duration length of video
```sh
ffmpeg -i input.mp4 -ss 00:05:20 -t 00:10:00 -c:v copy -c:a copy output.mp4
```