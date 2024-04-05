/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Embedding } from './Embedding';
export type CreateEmbeddingResponse = {
    /**
     * The list of embeddings generated by the model.
     */
    data: Array<Embedding>;
    /**
     * The name of the model used to generate the embedding.
     */
    model: string;
    /**
     * The object type, which is always "list".
     */
    object: CreateEmbeddingResponse.obj;
    /**
     * The usage information for the request.
     */
    usage: {
        /**
         * The number of tokens used by the prompt.
         */
        prompt_tokens: number;
        /**
         * The total number of tokens used by the request.
         */
        total_tokens: number;
    };
};
export namespace CreateEmbeddingResponse {
    /**
     * The object type, which is always "list".
     */
    export enum obj {
        LIST = 'list',
    }
}
