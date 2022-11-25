import { IconType } from '@utility/typeDefinitions/componentPropTypes';

const SVGComponent = (props: IconType) => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect width={18} height={18} fill="url(#delayed)" />
    <defs>
      <pattern id="delayed" patternContentUnits="objectBoundingBox" width={1} height={1}>
        <use xlinkHref="#image0_199_240" transform="scale(0.0078125)" />
      </pattern>
      <image
        id="image0_199_240"
        width={128}
        height={128}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAOxAAADsQH1g+1JAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuNTY2ZWJjNWI0LCAyMDIyLzA1LzA5LTA4OjI1OjU1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMDgtMjlUMTg6MTArMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTA4LTI5VDE4OjEwOjE4KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA4LTI5VDE4OjEwOjE4KzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4NGFlYmExNC05NTg1LTRjMTMtODMxMi1iN2I0YTIzMzA1NmYiIHhtcE1NOkRvY3VtZW50SUQ9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"
      />
    </defs>
  </svg>
);

export default SVGComponent;
