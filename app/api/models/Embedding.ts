/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents an embedding vector returned by embedding endpoint.
 *
 */
export type Embedding = {
    /**
     * The index of the embedding in the list of embeddings.
     */
    index: number;
    /**
     * The embedding vector, which is a list of floats. The length of vector depends on the model as listed in the [embedding guide](/docs/guides/embeddings).
     *
     */
    embedding: Array<number>;
    /**
     * The object type, which is always "embedding".
     */
    object: Embedding.obj;
};
export namespace Embedding {
    /**
     * The object type, which is always "embedding".
     */
    export enum obj {
        EMBEDDING = 'embedding',
    }
}

