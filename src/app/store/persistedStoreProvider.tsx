"use client";

import { persister } from "./store";
import { PersistGate } from "redux-persist/integration/react";

export function PersistedStoreProviders({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<PersistGate
			loading={null}
			persistor={persister}
		>
			{children}
		</PersistGate>
	);
}
