/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CompletionUsage } from './CompletionUsage';
/**
 * Represents a completion response from the API. Note: both the streamed and non-streamed response objects share the same shape (unlike the chat endpoint).
 *
 */
export type CreateCompletionResponse = {
    /**
     * A unique identifier for the completion.
     */
    id: string;
    /**
     * The list of completion choices the model generated for the input prompt.
     */
    choices: Array<{
        /**
         * The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence,
         * `length` if the maximum number of tokens specified in the request was reached,
         * or `content_filter` if content was omitted due to a flag from our content filters.
         *
         */
        finish_reason: 'stop' | 'length' | 'content_filter';
        index: number;
        logprobs: {
            text_offset?: Array<number>;
            token_logprobs?: Array<number>;
            tokens?: Array<string>;
            top_logprobs?: Array<Record<string, number>>;
        } | null;
        text: string;
    }>;
    /**
     * The Unix timestamp (in seconds) of when the completion was created.
     */
    created: number;
    /**
     * The model used for completion.
     */
    model: string;
    /**
     * This fingerprint represents the backend configuration that the model runs with.
     *
     * Can be used in conjunction with the `seed` request parameter to understand when backend changes have been made that might impact determinism.
     *
     */
    system_fingerprint?: string;
    /**
     * The object type, which is always "text_completion"
     */
    object: CreateCompletionResponse.obj;
    usage?: CompletionUsage;
};
export namespace CreateCompletionResponse {
    /**
     * The object type, which is always "text_completion"
     */
    export enum obj {
        TEXT_COMPLETION = 'text_completion',
    }
}

