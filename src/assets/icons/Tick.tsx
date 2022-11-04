import { IconType } from "@utility/typeDefinitions/componentPropTypes";

const SVGComponent = (props: IconType) => (
  <svg
    width={12}
    height={13}
    viewBox="0 0 12 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect y={0.5} width={14} height={14} fill="url(#tick)" />
    <defs>
      <pattern
        id="tick"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#image0_198_206" transform="scale(0.0078125)" />
      </pattern>
      <image
        id="image0_198_206"
        width={128}
        height={128}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAALFAAACxQGJ1n/vAAAE9GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuNTY2ZWJjNWI0LCAyMDIyLzA1LzA5LTA4OjI1OjU1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMDgtMDFUMTU6MzU6MTIrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTA4LTAxVDE1OjM2OjAzKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA4LTAxVDE1OjM2OjAzKzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpiMmJlOGQ5Yi1lMmQ5LTQ0ZDQtODhiZS1iNjBlZjNjNWU5N2EiIHhtcE1NOkRvY3VtZW50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"
      />
    </defs>
  </svg>
);

export default SVGComponent;
