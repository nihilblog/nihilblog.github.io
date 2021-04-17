import React from 'react';
import { css } from '@emotion/react';

export const Image = ({ src, alt, top = 40, bottom = 40, }) => {
  const style = css`
    max-width: 940px;
    box-sizing: border-box;
    margin: ${top}px auto ${bottom}px auto;
    background-color: #333333;
    padding: 10px;
    border-radius: 10px;
    display: table;
    position: relative;

    & > a {
      background-color: #bbbbbb;
      border-radius: 10px;
      color: #555555;
      transition: all 0.3s;
      padding: 5px 10px;
      margin-top: 10px;
      display: block;
      text-align: center;
      font-size: 120%;
      font-weight: 500;
      
      &:before {
        content: '\\f065';
        font-weight: 900;
        font-family: 'Font Awesome 5 Free';
        margin-right: 5px;
      }

      &:hover {
        background-color: #ffffff;
        color: #333333;
        transition: all 0.3s;
      }
    }

    & > img {
      margin: 0px auto;
      max-width: 100%;
      border-radius: 10px;
      display: block;
      transition: all 0.3s;
    }

    & > figcaption {
      margin-top: 10px;
      font-size: 11pt;
      text-align: center;
      font-style: italic;
      color: #aaaaaa;

      &:before {
        content: '\\f03e';
        font-weight: 900;
        font-family: 'Font Awesome 5 Free';
        margin-right: 5px;
      }
    }
  `;

  return (
    <>
      <figure className='post-image-block' css={style}>
        <img src={src} alt={alt} />
        <a href={src} target='_blank' rel='noreferrer noopener'>크게 보기 (새 창)</a>
        <figcaption>{alt}</figcaption>
      </figure>
    </>
  );
};