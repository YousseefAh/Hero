"use client";

import { StagewiseToolbar } from "@stagewise/toolbar-next";
import { ReactPlugin } from "@stagewise-plugins/react";
import { useCallback } from "react";

// Error boundary component
function ErrorBoundary({ children }) {
  return (
    <div onError={(e) => {
      e.preventDefault();
      console.warn('Stagewise error:', e);
    }}>
      {children}
    </div>
  );
}

export default function StagewiseToolbarWrapper() {
  // Custom handler for selection events
  const handleSelection = useCallback((selection) => {
    if (!selection || typeof selection !== 'object') return null;
    return selection;
  }, []);

  return (
    <ErrorBoundary>
      <StagewiseToolbar
        config={{
          plugins: [ReactPlugin],
          options: {
            handleSelection,
            disableAutoSelection: true,
            safeMode: true
          }
        }}
      />
    </ErrorBoundary>
  );
} 