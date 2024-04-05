/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChatCompletionStreamResponseDelta } from './ChatCompletionStreamResponseDelta';
import type { ChatCompletionTokenLogprob } from './ChatCompletionTokenLogprob';
/**
 * Represents a streamed chunk of a chat completion response returned by model, based on the provided input.
 */
export type CreateChatCompletionStreamResponse = {
    /**
     * A unique identifier for the chat completion. Each chunk has the same ID.
     */
    id: string;
    /**
     * A list of chat completion choices. Can be more than one if `n` is greater than 1.
     */
    choices: Array<{
        delta: ChatCompletionStreamResponseDelta;
        /**
         * Log probability information for the choice.
         */
        logprobs?: {
            /**
             * A list of message content tokens with log probability information.
             */
            content: Array<ChatCompletionTokenLogprob> | null;
        } | null;
        /**
         * The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence,
         * `length` if the maximum number of tokens specified in the request was reached,
         * `content_filter` if content was omitted due to a flag from our content filters,
         * `tool_calls` if the model called a tool, or `function_call` (deprecated) if the model called a function.
         *
         */
        finish_reason: 'stop' | 'length' | 'tool_calls' | 'content_filter' | 'function_call' | null;
        /**
         * The index of the choice in the list of choices.
         */
        index: number;
    }>;
    /**
     * The Unix timestamp (in seconds) of when the chat completion was created. Each chunk has the same timestamp.
     */
    created: number;
    /**
     * The model to generate the completion.
     */
    model: string;
    /**
     * This fingerprint represents the backend configuration that the model runs with.
     * Can be used in conjunction with the `seed` request parameter to understand when backend changes have been made that might impact determinism.
     *
     */
    system_fingerprint?: string;
    /**
     * The object type, which is always `chat.completion.chunk`.
     */
    object: CreateChatCompletionStreamResponse.obj;
};
export namespace CreateChatCompletionStreamResponse {
    /**
     * The object type, which is always `chat.completion.chunk`.
     */
    export enum obj {
        CHAT_COMPLETION_CHUNK = 'chat.completion.chunk',
    }
}

