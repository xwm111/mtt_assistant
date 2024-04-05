/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateTranslationRequest = {
    /**
     * The audio file object (not file name) translate, in one of these formats: flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, or webm.
     *
     */
    file: Blob;
    /**
     * ID of the model to use. Only `whisper-1` (which is powered by our open source Whisper V2 model) is currently available.
     *
     */
    model: (string | 'whisper-1');
    /**
     * An optional text to guide the model's style or continue a previous audio segment. The [prompt](/docs/guides/speech-to-text/prompting) should be in English.
     *
     */
    prompt?: string;
    /**
     * The format of the transcript output, in one of these options: `json`, `text`, `srt`, `verbose_json`, or `vtt`.
     *
     */
    response_format?: string;
    /**
     * The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use [log probability](https://en.wikipedia.org/wiki/Log_probability) to automatically increase the temperature until certain thresholds are hit.
     *
     */
    temperature?: number;
};

