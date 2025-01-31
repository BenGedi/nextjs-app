"use client";
import { useRef } from "react";
import classes from "./image-picker.module.css";

export default function ImagePicker({ name, label }) {
  const imageInput = useRef();

  function handlePickClick() {
    inputRef.current.click();
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          ref={imageInput}
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept="image/jpeg, image/png"
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
