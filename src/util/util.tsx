function wrapPromise<T>(promise: Promise<T>) {
	let status: "pending" | "success" | "error" = "pending";
	let result: T;
	let suspender = promise.then(
		(data) => {
			status = "success";
			result = data;
		},
		(error) => {
			status = "error";
			result = error;
		}
	);
	return {
		read(): T {
			if (status === "pending") {
				throw suspender; // Suspense will catch this promise.
			} else if (status === "error") {
				throw result;
			} else {
				return result;
			}
		},
	};
}

export { wrapPromise };
