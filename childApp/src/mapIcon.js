const mapBlue = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA4CAYAAAC/pKvXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkUyQzU3MjcyMDczODExRUM4QzZCQjlEMzgwNTlBNTQ3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkUyQzU3MjczMDczODExRUM4QzZCQjlEMzgwNTlBNTQ3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTJDNTcyNzAwNzM4MTFFQzhDNkJCOUQzODA1OUE1NDciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTJDNTcyNzEwNzM4MTFFQzhDNkJCOUQzODA1OUE1NDciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5mJf3QAAANV0lEQVR42sxa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';
const mapYellow = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA4CAYAAAC/pKvXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ1QzI4MTlFMDczODExRUNCRTQxQjgwNTJGMDE5MjlEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ1QzI4MTlGMDczODExRUNCRTQxQjgwNTJGMDE5MjlEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDVDMjgxOUMwNzM4MTFFQ0JFNDFCODA1MkYwMTkyOUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDVDMjgxOUQwNzM4MTFFQ0JFNDFCODA1MkYwMTkyOUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7vXEPnAAAN2ElEQVR42sxa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';
const labelBgBlue = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKcAAABoCAYAAACUqOCNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBBNEEwRTA2MDc5RDExRUM5NTk0QURFOUFCNzBBMzMzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBBNEEwRTA3MDc5RDExRUM5NTk0QURFOUFCNzBBMzMzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MEE0QTBFMDQwNzlEMTFFQzk1OTRBREU5QUI3MEEzMzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MEE0QTBFMDUwNzlEMTFFQzk1OTRBREU5QUI3MEEzMzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4uTaFhAAAKuElEQVR42uya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';
const labelBgYellow = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKcAAABoCAYAAACUqOCNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkZCNTg0QjhDMDc5QzExRUNCM0VCREVGM0QyMzlBMzYxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkZCNTg0QjhEMDc5QzExRUNCM0VCREVGM0QyMzlBMzYxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkI1ODRCOEEwNzlDMTFFQ0IzRUJERUYzRDIzOUEzNjEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RkI1ODRCOEIwNzlDMTFFQ0IzRUJERUYzRDIzOUEzNjEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6Wb7eoAAALUUlEQVR42uyb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';
export {
  mapBlue, mapYellow, labelBgBlue, labelBgYellow,
};
