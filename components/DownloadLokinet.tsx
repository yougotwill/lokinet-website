import React, { useState } from "react";

import Link from "next/link";
import { TextDownloadLokinetButton } from "./buttons/TextButton";
import styled from "styled-components";

const Container = styled.section`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--margins-sm) var(--margins-lg);

  @media (max-width: 1024px) {
    align-self: center;
  }
`;

const DownloadIconsContainer = styled.span<{ isVisible: boolean }>`
  padding-top: var(--margins-md);
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  pointer-events: ${(props) => (props.isVisible ? "default" : "none")};
  cursor: ${(props) => (props.isVisible ? "pointer" : "default")};
  text-decoration: ${(props) => (props.isVisible ? "pointer" : "none")};
`;

const DownloadIconButton = styled.button`
  padding: 15px;
  width: 60px;
  height: auto;
  background: none;
  border: none;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;

function WindowsDownloadButton() {
  return (
    <DownloadIconButton>
      <Link href="windows">
        <a rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-2.61977004 -2.61977004 92.56520808 92.83416708"
            fill="var(--color-text)"
          >
            <path d="M0 12.40183L35.68737 7.5416l.0156 34.42275-35.66976.20313zm35.67037 33.52906l.0277 34.45332-35.66989-4.9041-.002-29.77972zm4.32607-39.02494L87.31462 0v41.527l-47.31818.37565zm47.32923 39.34876l-.0111 41.33992-47.31817-6.67838-.0663-34.73858z" />
          </svg>
        </a>
      </Link>
    </DownloadIconButton>
  );
}

function LinuxDownloadButton() {
  return (
    <DownloadIconButton>
      <a
        href="https://docs.oxen.io/products-built-on-oxen/lokinet/guides/linux-gui-install-guide"
        rel="noopener noreferrer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 712 860">
          <path
            fill="var(--color-text)"
            d="M683.91 677.74c-.01-.01-.021-.021-.021-.03-6.069-6.85-8.96-19.55-12.069-33.08-3.101-13.52-6.57-28.1-17.67-37.55-.021-.021-.051-.04-.07-.061-2.2-1.92-4.46-3.539-6.73-4.89-2.279-1.35-4.59-2.45-6.899-3.32 15.43-45.76 9.38-91.329-6.2-132.5-19.11-50.54-52.48-94.569-77.97-124.689-28.53-35.99-56.431-70.15-55.88-120.61C501.25 144 508.87 1.19 373.35 1c-5.51-.01-11.26.22-17.25.7-151.44 12.19-111.27 172.19-113.52 225.76-2.77 39.18-10.71 70.06-37.66 108.36-31.65 37.64-76.23 98.57-97.34 162-9.96 29.93-14.7 60.439-10.33 89.319-1.37 1.23-2.67 2.521-3.92 3.841-9.29 9.93-16.16 21.949-23.81 30.039-7.15 7.141-17.33 9.851-28.53 13.86-11.2 4.021-23.49 9.94-30.95 24.26 0 0 0 .011-.01.011-.01.02-.02.05-.04.069-3.51 6.55-4.65 13.62-4.65 20.79 0 6.63.98 13.351 1.97 19.82 2.06 13.46 4.15 26.189 1.38 34.81-8.86 24.23-10 40.98-3.76 53.141 6.26 12.18 19.11 17.55 33.64 20.59 29.06 6.06 68.41 4.56 99.42 21l2.67-5.03-2.64 5.04c33.2 17.36 66.86 23.521 93.71 17.39 19.48-4.439 35.28-16.039 43.4-33.88 21-.1 44.05-9 80.97-11.029 25.05-2.021 56.34 8.899 92.33 6.899.94 3.9 2.301 7.66 4.16 11.23.021.029.04.069.061.1 13.949 27.9 39.869 40.66 67.5 38.48 27.659-2.181 57.069-18.49 80.85-46.78l-4.36-3.66 4.391 3.62c22.66-27.48 60.27-38.87 85.22-53.91 12.47-7.52 22.58-16.939 23.37-30.62.778-13.67-7.252-28.99-25.712-49.48z"
          />
          <path
            fill="var(--color-background)"
            d="M698.24 726.57c-.48 8.439-6.59 14.71-17.88 21.51-22.561 13.61-62.551 25.45-88.08 56.38-22.181 26.39-49.221 40.88-73.03 42.76s-44.35-8-56.47-32.31l-.021-.05-.029-.061c-7.521-14.3-4.391-36.85 1.939-60.649 6.33-23.79 15.43-48.23 16.65-68.08v-.061c1.279-25.439 2.71-47.66 6.979-64.81 4.28-17.15 11.01-28.75 22.931-35.28.56-.3 1.109-.59 1.659-.86 1.351 22.03 12.261 44.511 31.54 49.37 21.101 5.561 51.511-12.54 64.351-27.31 2.569-.101 5.069-.23 7.5-.29 11.27-.271 20.71.38 30.37 8.82l.029.029.03.021c7.42 6.29 10.95 18.17 14.01 31.47 3.061 13.311 5.5 27.8 14.681 38.13l.01.01.01.021c17.641 19.57 23.311 32.79 22.821 41.24zM269.49 788.95l-.01.06v.07c-2.04 26.74-17.12 41.3-40.28 46.59-23.14 5.29-54.53.021-85.87-16.37-.01 0-.02-.01-.03-.01-34.68-18.37-75.93-16.54-102.4-22.07-13.23-2.76-21.87-6.92-25.83-14.64-3.96-7.73-4.05-21.2 4.37-44.17l.04-.101.03-.1c4.17-12.85 1.08-26.91-.94-40.11-2.02-13.189-3.01-25.199 1.5-33.56l.04-.08c5.77-11.12 14.23-15.1 24.73-18.86 10.51-3.77 22.96-6.729 32.79-16.59l.06-.05.05-.05c9.09-9.59 15.92-21.62 23.91-30.15 6.74-7.2 13.49-11.97 23.66-12.04.12.011.23.011.35 0 1.78.011 3.67.16 5.67.471 13.5 2.04 25.27 11.479 36.61 26.859l32.74 59.67.01.03.02.02c8.71 18.19 27.11 38.2 42.7 58.61 15.59 20.401 27.65 40.891 26.08 56.571zM432.77 232.69c-2.63-5.15-8-10.05-17.14-13.8l-.02-.01-.03-.01c-19.01-8.14-27.26-8.72-37.87-15.62-17.27-11.1-31.54-14.99-43.4-14.94-6.21.02-11.76 1.12-16.73 2.84-14.45 4.97-24.04 15.34-30.05 21.03l-.01.01c0 .01-.01.01-.01.02-1.18 1.12-2.7 2.14-6.38 4.84-3.71 2.71-9.27 6.79-17.27 12.79-7.11 5.33-9.42 12.27-6.96 20.4 2.45 8.13 10.29 17.51 24.63 25.62l.02.02.03.01c8.9 5.23 14.98 12.28 21.96 17.89 3.49 2.8 7.16 5.3 11.58 7.19 4.42 1.89 9.58 3.17 16.04 3.55 15.16.88 26.32-3.67 36.17-9.31 9.87-5.63 18.229-12.52 27.82-15.63l.02-.01.021-.01c19.659-6.14 33.68-18.51 38.069-30.26 2.2-5.88 2.13-11.46-.49-16.61z"
          />
          <path
            fill="var(--color-text)"
            d="M382.89 261.71c-15.64075 8.1527-33.91 18.04-53.35 18.04-19.43 0-34.78-8.98-45.82-17.73-5.52-4.37-10-8.72-13.38-11.88-5.86434-4.62903-5.16188-11.12168-2.75246-10.93 4.03863.50418 4.64927 5.82168 7.19246 8.2 3.44 3.22 7.75 7.39 12.97 11.53 10.44 8.27 24.36 16.32 41.79 16.32 17.4 0 37.71174-10.21517 50.11-17.17 7.02421-3.94024 15.96224-11.0031 23.25658-16.35742 5.58072-4.09647 5.37722-9.02921 9.98509-8.49216 4.60786.53705 1.19917 5.45984-5.25377 11.09153-6.45295 5.63169-16.54818 13.10397-24.7479 17.37805z"
          />
          <path
            fill="var(--color-background)"
            d="M622.39 595.47c-2.17-.08-4.31-.069-6.39-.02-.19.01-.38.01-.58.01 5.37-16.96-6.51-29.47-38.17-43.79-32.83-14.439-58.99-13.01-63.41 16.29-.28 1.53-.51 3.1-.68 4.68-2.46.86-4.92 1.94-7.4 3.29-15.41 8.44-23.83 23.74-28.51 42.521-4.67 18.76-6.02 41.43-7.3 66.92v.02c-.79 12.811-6.07 30.15-11.41 48.511-53.78 38.369-128.42 54.989-191.8 11.729-4.29-6.79-9.22-13.52-14.29-20.16-3.24-4.239-6.57-8.45-9.87-12.609 6.5.01 12.03-1.061 16.5-3.08 5.56-2.53 9.46-6.57 11.4-11.771 3.86-10.39-.02-25.05-12.39-41.8-12.37-16.74-33.32-35.63-64.1-54.51v-.01c-22.62-14.07-35.26-31.311-41.18-50.03-5.93-18.73-5.1-38.98-.53-58.97 8.76-38.37 31.26-75.69 45.62-99.11 3.86-2.84 1.38 5.28-14.54 34.84-14.26 27.021-40.93 89.38-4.42 138.061.98-34.641 9.25-69.971 23.14-103.021 20.23-45.85 62.54-125.38 65.9-188.76 1.74 1.26 7.69 5.28 10.34 6.79.01.01.01.01.02.01 7.76 4.57 13.59 11.25 21.14 17.32 7.57 6.08 17.02 11.33 31.3 12.16 1.37.08 2.71.12 4.02.12 14.72 0 26.2-4.8 35.76-10.27 10.391-5.94 18.69-12.52 26.561-15.08.01-.01.02-.01.03-.01 16.63-5.2 29.84-14.4 37.359-25.12 12.92 50.92 42.96 124.47 62.271 160.36 10.27 19.04 30.689 59.5 39.51 108.25 5.59-.171 11.75.64 18.34 2.329 23.07-59.81-19.56-124.22-39.06-142.16-7.87-7.64-8.25-11.06-4.34-10.9 21.14 18.71 48.909 56.32 59.01 98.78 4.609 19.359 5.59 39.72.649 59.81 2.41 1 4.87 2.09 7.36 3.271 37.03 18.029 50.72 33.709 44.14 55.109z"
          />
          <path
            fill="var(--color-background)"
            d="M434.51 174.03c.08 10.09-1.66 18.68-5.49 27.45-2.18 5-4.689 9.2-7.699 12.84-1.021-.49-2.08-.96-3.181-1.41-3.81-1.63-7.18-2.97-10.199-4.11-3.021-1.14-5.37791-1.91895-7.80891-2.75895 1.761-2.13 5.23-4.64 6.521-7.79 1.96-4.75 2.92-9.39 3.1-14.92 0-.22.07-.41.07-.67.11-5.3-.59-9.83-2.14-14.47-1.62-4.87-3.681-8.37-6.66-11.28-2.99-2.91-5.97-4.23-9.55-4.35-.17-.01-.33-.01-.5-.01-3.36.01-6.28 1.17-9.301 3.69-3.17 2.65-5.52 6.04-7.479 10.76-1.95 4.72-2.91 9.4-3.101 14.96-.029.22-.029.41-.029.63-.07 3.06.13 5.86.6 8.58-6.88-3.43-15.68209-5.93105-21.76209-7.38105-.35-2.63-.55-5.34-.61-8.18v-.77c-.11-10.06 1.54-18.69 5.41-27.45 3.87-8.77 8.66-15.07 15.399-20.2 6.75-5.12 13.381-7.47 21.23-7.55h.37c7.68 0 14.25 2.26 21 7.15 6.85 4.98 11.79 11.2 15.77 19.9 3.9 8.48 5.78 16.77 5.971 26.6-.001.26-.001.48.069.74zM318.43 184.08c-1.01.29-1.99.6-2.96.93-5.5 1.9-9.86686 3.99686-14.08686 6.78686.41-2.92.47-5.88.15-9.19-.03-.18-.03-.33-.03-.51-.44-4.39-1.37-8.07-2.92-11.79-1.65-3.87-3.5-6.6-5.93-8.7-2.2-1.9-4.28-2.78-6.58-2.76-.23 0-.47.01-.71.03-2.58.22-4.72 1.48-6.75 3.95-2.02 2.46-3.35 5.52-4.31 9.58-.96 4.05-1.21 8.03-.81 12.6 0 .18.04.33.04.51.44 4.43 1.33 8.11 2.91 11.83 1.62 3.83 3.5 6.56 5.93 8.66.41.35.81.67 1.21.95-2.52 1.95-4.21314 3.33314-6.29314 4.85314-1.33.97-2.91 2.13-4.75 3.49-4.01-3.76-7.14-8.48-9.88-14.71-3.24-7.36-4.97-14.73-5.49-23.43v-.07c-.48-8.7.37-16.18 2.76-23.92 2.4-7.74 5.6-13.34 10.25-17.94 4.64-4.61 9.32-6.93 14.96-7.22.44-.02.87-.03 1.3-.03 5.11.01 9.67 1.71 14.39 5.48 5.12 4.09 8.99 9.32 12.23 16.69 3.25 7.37 4.98 14.74 5.46 23.44v.07c.23 3.65.2 7.09-.09 10.42z"
          />
          <path
            fill="var(--color-text)"
            d="M344.08661 204.88969c.64684 2.07624 3.99301 1.73211 5.92629 2.72792 1.69642.87378 3.06086 2.78891 4.96829 2.84398 1.82043.0526 4.65359-.63043 4.89041-2.43615.31286-2.38563-3.17083-3.90165-5.41255-4.77563-2.88469-1.12471-6.58056-1.69534-9.28659-.19073-.6201.34477-1.29689 1.15328-1.08585 1.83064zM324.32226 204.88969c-.64684 2.07624-3.99301 1.73211-5.92629 2.72792-1.69642.87378-3.06086 2.78891-4.96829 2.84398-1.82043.0526-4.65359-.63043-4.89041-2.43615-.31286-2.38563 3.17083-3.90165 5.41255-4.77563 2.88469-1.12471 6.58056-1.69534 9.28659-.19073.6201.34477 1.29689 1.15328 1.08585 1.83064z"
          />
        </svg>
      </a>
    </DownloadIconButton>
  );
}

function GitHubButton() {
  return (
    <DownloadIconButton>
      <a href="https://github.com/oxen-io/lokinet" rel="noopener noreferrer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      </a>
    </DownloadIconButton>
  );
}

export const DownloadLokinet = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Container>
      <TextDownloadLokinetButton
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      />

      <DownloadIconsContainer isVisible={isExpanded}>
        {/* Removed until v0.9.10 is released */}
        {/* <WindowsDownloadButton /> */}
        <LinuxDownloadButton />
        <GitHubButton />
      </DownloadIconsContainer>
    </Container>
  );
};
