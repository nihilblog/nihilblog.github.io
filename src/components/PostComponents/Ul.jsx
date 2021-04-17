import React from 'react';
import { css } from '@emotion/react';

export const Ul = ({ children, top = 20, bottom = 20, }) => {
  const style = css`
    margin: ${top}px 0px ${bottom}px 0px;
    padding: 7px 10px 7px 10px;
    border: 2px solid #33333330;
    background-color: #33333310;
    border-radius: 10px;
    color: #333333;
    letter-spacing: -1px;
    font-weight: 500;
    transition: all 0.3s;

    & > li {
      margin: 3px 0px;
      transition: all 0.3s;

      &:before {
        content: '\\f35a';
        font-family: 'Font Awesome 5 Free';
        margin-right: 5px;
        font-weight: 900;
      }

      & > ol {
        padding: 0px;
        border: none;
        border-radius: none;
        background-color: transparent;

        & > li {
          &:before {
            background: #555555;
            color: #ffffff;
            font-weight: 900;
            padding: 0px 5px;
            border-radius: 5px;
            font-size: 90%;
          }
        }
      }

      & > ul {
        padding: 0px;
        border: none;
        border-radius: none;
        background-color: transparent;

        & > li {
          &:before {
            content: '\\f35a';
            font-family: 'Font Awesome 5 Free';
            margin-right: 5px;
            font-weight: 500;
          }

          & > ol {
            & > li {
              &:before {
                background: #777777;
                color: #ffffff;
                font-weight: 900;
                padding: 0px 5px;
                border-radius: 5px;
                font-size: 90%;
              }
            }
          }

          & > ul {
            padding: 0px;
            border: none;
            border-radius: none;
            background-color: transparent;

            & > li {
              &:before {
                content: '\\f105';
                font-family: 'Font Awesome 5 Free';
                margin-right: 5px;
                font-weight: 900;
              }
            }
          }
        }
      }
    }

    & ul,
    & ol {
      margin: 0px 0px 0px 25px;
    }
  `;

  return (
    <>
      <ul className='post-unordered-list' css={style}>{children}</ul>
    </>
  );
};