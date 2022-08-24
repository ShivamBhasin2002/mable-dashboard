const SvgComponent = (props: { size?: string; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={24}
    {...props}
  >
    <defs>
      <pattern
        id="dashboardIcon"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        viewBox="0 0 256 256"
      >
        <image
          width={256}
          height={256}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAdiAAAHYgE4epnbAAAFw2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuNTY2ZWJjNWI0LCAyMDIyLzA1LzA5LTA4OjI1OjU1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMDgtMDFUMjA6MDQ6MDYrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTA4LTAxVDIwOjA3OjMyKzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA4LTAxVDIwOjA3OjMyKzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5YzQyZDYzNC1lZDQ0LTRkMmItOWViOC02YjczNWQxZWUwOWMiIHhtcE1NOkRvY3VtZW50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"
        />
      </pattern>
    </defs>
    <path data-name="002-dashboard" fill="url(#dashboardIcon)" d="M0 0h24v24H0z" />
  </svg>
);

export default SvgComponent;