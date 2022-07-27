// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
var vite_config_default = defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "${path.resolve("/Volumes/Data/project/engineering-change-request-admin", "src/styles/theme.less")}";`,
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    alias: {
      "@/": path.resolve("/Volumes/Data/project/engineering-change-request-admin", "./src"),
      "@/configs": path.resolve("/Volumes/Data/project/engineering-change-request-admin", "./src/config"),
      "@/components": path.resolve("/Volumes/Data/project/engineering-change-request-admin", "./src/components"),
      "@/styles": path.resolve("/Volumes/Data/project/engineering-change-request-admin", "./src/styles"),
      "@/utils": path.resolve("/Volumes/Data/project/engineering-change-request-admin", "./src/utils"),
      "@/common": path.resolve("/Volumes/Data/project/engineering-change-request-admin", "./src/common"),
      "@/assets": path.resolve("/Volumes/Data/project/engineering-change-request-admin", "./src/assets"),
      "@/pages": path.resolve("/Volumes/Data/project/engineering-change-request-admin", "./src/pages"),
      "@/routes": path.resolve("/Volumes/Data/project/engineering-change-request-admin", "./src/routes"),
      "@/hooks": path.resolve("/Volumes/Data/project/engineering-change-request-admin", "./src/hooks"),
      "@/store": path.resolve("/Volumes/Data/project/engineering-change-request-admin", "./src/store")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICBjc3M6IHtcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICBsZXNzOiB7XG4gICAgICAgIGFkZGl0aW9uYWxEYXRhOiBgQGltcG9ydCBcIiR7cGF0aC5yZXNvbHZlKFwiL1ZvbHVtZXMvRGF0YS9wcm9qZWN0L2VuZ2luZWVyaW5nLWNoYW5nZS1yZXF1ZXN0LWFkbWluXCIsICdzcmMvc3R5bGVzL3RoZW1lLmxlc3MnKX1cIjtgLFxuICAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZSxcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHJlc29sdmU6IHtcbiAgICAvLyBcdTUyMkJcdTU0MERcdTkxNERcdTdGNkVcbiAgICBhbGlhczoge1xuICAgICAgJ0AvJzogcGF0aC5yZXNvbHZlKFwiL1ZvbHVtZXMvRGF0YS9wcm9qZWN0L2VuZ2luZWVyaW5nLWNoYW5nZS1yZXF1ZXN0LWFkbWluXCIsICcuL3NyYycpLFxuICAgICAgJ0AvY29uZmlncyc6IHBhdGgucmVzb2x2ZShcIi9Wb2x1bWVzL0RhdGEvcHJvamVjdC9lbmdpbmVlcmluZy1jaGFuZ2UtcmVxdWVzdC1hZG1pblwiLCAnLi9zcmMvY29uZmlnJyksXG4gICAgICAnQC9jb21wb25lbnRzJzogcGF0aC5yZXNvbHZlKFwiL1ZvbHVtZXMvRGF0YS9wcm9qZWN0L2VuZ2luZWVyaW5nLWNoYW5nZS1yZXF1ZXN0LWFkbWluXCIsICcuL3NyYy9jb21wb25lbnRzJyksXG4gICAgICAnQC9zdHlsZXMnOiBwYXRoLnJlc29sdmUoXCIvVm9sdW1lcy9EYXRhL3Byb2plY3QvZW5naW5lZXJpbmctY2hhbmdlLXJlcXVlc3QtYWRtaW5cIiwgJy4vc3JjL3N0eWxlcycpLFxuICAgICAgJ0AvdXRpbHMnOiBwYXRoLnJlc29sdmUoXCIvVm9sdW1lcy9EYXRhL3Byb2plY3QvZW5naW5lZXJpbmctY2hhbmdlLXJlcXVlc3QtYWRtaW5cIiwgJy4vc3JjL3V0aWxzJyksXG4gICAgICAnQC9jb21tb24nOiBwYXRoLnJlc29sdmUoXCIvVm9sdW1lcy9EYXRhL3Byb2plY3QvZW5naW5lZXJpbmctY2hhbmdlLXJlcXVlc3QtYWRtaW5cIiwgJy4vc3JjL2NvbW1vbicpLFxuICAgICAgJ0AvYXNzZXRzJzogcGF0aC5yZXNvbHZlKFwiL1ZvbHVtZXMvRGF0YS9wcm9qZWN0L2VuZ2luZWVyaW5nLWNoYW5nZS1yZXF1ZXN0LWFkbWluXCIsICcuL3NyYy9hc3NldHMnKSxcbiAgICAgICdAL3BhZ2VzJzogcGF0aC5yZXNvbHZlKFwiL1ZvbHVtZXMvRGF0YS9wcm9qZWN0L2VuZ2luZWVyaW5nLWNoYW5nZS1yZXF1ZXN0LWFkbWluXCIsICcuL3NyYy9wYWdlcycpLFxuICAgICAgJ0Avcm91dGVzJzogcGF0aC5yZXNvbHZlKFwiL1ZvbHVtZXMvRGF0YS9wcm9qZWN0L2VuZ2luZWVyaW5nLWNoYW5nZS1yZXF1ZXN0LWFkbWluXCIsICcuL3NyYy9yb3V0ZXMnKSxcbiAgICAgICdAL2hvb2tzJzogcGF0aC5yZXNvbHZlKFwiL1ZvbHVtZXMvRGF0YS9wcm9qZWN0L2VuZ2luZWVyaW5nLWNoYW5nZS1yZXF1ZXN0LWFkbWluXCIsICcuL3NyYy9ob29rcycpLFxuICAgICAgJ0Avc3RvcmUnOiBwYXRoLnJlc29sdmUoXCIvVm9sdW1lcy9EYXRhL3Byb2plY3QvZW5naW5lZXJpbmctY2hhbmdlLXJlcXVlc3QtYWRtaW5cIiwgJy4vc3JjL3N0b3JlJylcbiAgICB9XG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFBO0FBQ0E7QUFDQTtBQUdBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNqQixLQUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsUUFDSixnQkFBZ0IsWUFBWSxLQUFLLFFBQVEsMERBQTBELHVCQUF1QjtBQUFBLFFBQzFILG1CQUFtQjtBQUFBLE1BQ3JCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUVQLE9BQU87QUFBQSxNQUNMLE1BQU0sS0FBSyxRQUFRLDBEQUEwRCxPQUFPO0FBQUEsTUFDcEYsYUFBYSxLQUFLLFFBQVEsMERBQTBELGNBQWM7QUFBQSxNQUNsRyxnQkFBZ0IsS0FBSyxRQUFRLDBEQUEwRCxrQkFBa0I7QUFBQSxNQUN6RyxZQUFZLEtBQUssUUFBUSwwREFBMEQsY0FBYztBQUFBLE1BQ2pHLFdBQVcsS0FBSyxRQUFRLDBEQUEwRCxhQUFhO0FBQUEsTUFDL0YsWUFBWSxLQUFLLFFBQVEsMERBQTBELGNBQWM7QUFBQSxNQUNqRyxZQUFZLEtBQUssUUFBUSwwREFBMEQsY0FBYztBQUFBLE1BQ2pHLFdBQVcsS0FBSyxRQUFRLDBEQUEwRCxhQUFhO0FBQUEsTUFDL0YsWUFBWSxLQUFLLFFBQVEsMERBQTBELGNBQWM7QUFBQSxNQUNqRyxXQUFXLEtBQUssUUFBUSwwREFBMEQsYUFBYTtBQUFBLE1BQy9GLFdBQVcsS0FBSyxRQUFRLDBEQUEwRCxhQUFhO0FBQUEsSUFDakc7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
