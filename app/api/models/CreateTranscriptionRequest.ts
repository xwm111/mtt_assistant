/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateTranscriptionRequest = {
    /**
     * The audio file object (not file name) to transcribe, in one of these formats: flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, or webm.
     *
     */
    file: Blob;
    /**
     * ID of the model to use. Only `whisper-1` (which is powered by our open source Whisper V2 model) is currently available.
     *
     */
    model: (string | 'whisper-1');
    /**
     * The language of the input audio. Supplying the input language in [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format will improve accuracy and latency.
     *
     */
    language?: string;
    /**
     * An optional text to guide the model's style or continue a previous audio segment. The [prompt](/docs/guides/speech-to-text/prompting) should match the audio language.
     *
     */
    prompt?: string;
    /**
     * The format of the transcript output, in one of these options: `json`, `text`, `srt`, `verbose_json`, or `vtt`.
     *
     */
    response_format?: CreateTranscriptionRequest.response_format;
    /**
     * The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. If set to 0, the model will use [log probability](https://en.wikipedia.org/wiki/Log_probability) to automatically increase the temperature until certain thresholds are hit.
     *
     */
    temperature?: number;
    /**
     * The timestamp granularities to populate for this transcription. `response_format` must be set `verbose_json` to use timestamp granularities. Either or both of these options are supported: `word`, or `segment`. Note: There is no additional latency for segment timestamps, but generating word timestamps incurs additional latency.
     *
     */
    'timestamp_granularities[]'?: Array<'word' | 'segment'>;
};
export namespace CreateTranscriptionRequest {
    /**
     * The format of the transcript output, in one of these options: `json`, `text`, `srt`, `verbose_json`, or `vtt`.
     *
     */
    export enum response_format {
        JSON = 'json',
        TEXT = 'text',
        SRT = 'srt',
        VERBOSE_JSON = 'verbose_json',
        VTT = 'vtt',
    }
}

