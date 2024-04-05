/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The `fine_tuning.job` object represents a fine-tuning job that has been created through the API.
 *
 */
export type FineTuningJob = {
    /**
     * The object identifier, which can be referenced in the API endpoints.
     */
    id: string;
    /**
     * The Unix timestamp (in seconds) for when the fine-tuning job was created.
     */
    created_at: number;
    /**
     * For fine-tuning jobs that have `failed`, this will contain more information on the cause of the failure.
     */
    error: {
        /**
         * A machine-readable error code.
         */
        code: string;
        /**
         * A human-readable error message.
         */
        message: string;
        /**
         * The parameter that was invalid, usually `training_file` or `validation_file`. This field will be null if the failure was not parameter-specific.
         */
        param: string | null;
    } | null;
    /**
     * The name of the fine-tuned model that is being created. The value will be null if the fine-tuning job is still running.
     */
    fine_tuned_model: string | null;
    /**
     * The Unix timestamp (in seconds) for when the fine-tuning job was finished. The value will be null if the fine-tuning job is still running.
     */
    finished_at: number | null;
    /**
     * The hyperparameters used for the fine-tuning job. See the [fine-tuning guide](/docs/guides/fine-tuning) for more details.
     */
    hyperparameters: {
        /**
         * The number of epochs to train the model for. An epoch refers to one full cycle through the training dataset.
         * "auto" decides the optimal number of epochs based on the size of the dataset. If setting the number manually, we support any number between 1 and 50 epochs.
         */
        n_epochs: ('auto' | number);
    };
    /**
     * The base model that is being fine-tuned.
     */
    model: string;
    /**
     * The object type, which is always "fine_tuning.job".
     */
    object: FineTuningJob.obj;
    /**
     * The organization that owns the fine-tuning job.
     */
    organization_id: string;
    /**
     * The compiled results file ID(s) for the fine-tuning job. You can retrieve the results with the [Files API](/docs/api-reference/files/retrieve-contents).
     */
    result_files: Array<string>;
    /**
     * The current status of the fine-tuning job, which can be either `validating_files`, `queued`, `running`, `succeeded`, `failed`, or `cancelled`.
     */
    status: FineTuningJob.status;
    /**
     * The total number of billable tokens processed by this fine-tuning job. The value will be null if the fine-tuning job is still running.
     */
    trained_tokens: number | null;
    /**
     * The file ID used for training. You can retrieve the training data with the [Files API](/docs/api-reference/files/retrieve-contents).
     */
    training_file: string;
    /**
     * The file ID used for validation. You can retrieve the validation results with the [Files API](/docs/api-reference/files/retrieve-contents).
     */
    validation_file: string | null;
};
export namespace FineTuningJob {
    /**
     * The object type, which is always "fine_tuning.job".
     */
    export enum obj {
        FINE_TUNING_JOB = 'fine_tuning.job',
    }
    /**
     * The current status of the fine-tuning job, which can be either `validating_files`, `queued`, `running`, `succeeded`, `failed`, or `cancelled`.
     */
    export enum status {
        VALIDATING_FILES = 'validating_files',
        QUEUED = 'queued',
        RUNNING = 'running',
        SUCCEEDED = 'succeeded',
        FAILED = 'failed',
        CANCELLED = 'cancelled',
    }
}

