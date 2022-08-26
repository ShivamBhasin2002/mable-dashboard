import { IconType } from 'utility/typeDefinitions/componentTypes';

const SVGComponent = (props: IconType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 24 24"
    {...props}
  >
    <defs>
      <pattern
        id="EventQualityIcon"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        viewBox="0 0 256 256"
      >
        <image
          width={256}
          height={256}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAdiAAAHYgE4epnbAAAGkmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuNTY2ZWJjNWI0LCAyMDIyLzA1LzA5LTA4OjI1OjU1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjMuNCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMDgtMDFUMjA6MDQ6MDYrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTA4LTAzVDE3OjQ0OjA5KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA4LTAzVDE3OjQ0OjA5KzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3ZDJlODZmZC1kMTg4LTQyZDgtOGZiZC0xNzQ0ZDA5OWMzZGUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ZTYxYTIyMGYtMjUzNC00Mjk2LTgxZTQtN2E2YWI2MDU4OWEyIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZTYxYTIyMGYtMjUzNC00Mjk2LTgxZTQtN2E2YWI2MDU4OWEyIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplNjFhMjIwZi0yNTM0LTQyOTYtODFlNC03YTZhYjYwNTg5YTIiIHN0RXZ0OndoZW49IjIwMjItMDgtMDFUMjA6MDQ6MDYrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy40IChNYWNpbnRvc2gpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyYzU0YmI0OC0xNmEyLTQzM2EtOTc5MS00YzRmZjVlMzJjNzAiIHN0RXZ0OndoZW49IjIwMjItMDgtMDFUMjA6MDc6NDErMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy40IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3ZDJlODZmZC1kMTg4LTQyZDgtOGZiZC0xNzQ0ZDA5OWMzZGUiIHN0RXZ0OndoZW49IjIwMjItMDgtMDNUMTc6NDQ6MDkrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMy40IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pp/y9YUAAByySURBVHic7Z13mJXVtYffGRARFUURbKDYewnGhqBGid0YS4glahKJiTEajS3Xa8Ek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"
        />
      </pattern>
    </defs>
    <rect
      id="_001-data-management"
      data-name="001-data-management"
      fill="url(#EventQualityIcon)"
      {...props}
    />
  </svg>
);

export default SVGComponent;
