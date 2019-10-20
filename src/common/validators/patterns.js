/**
 * Password pattern - matches only if the text contains small or large letters and one special char, it also requires at least 4 letters
 * @const
 */
const password = /^((?=.*[a-z])|(?=.*[A-Z]))(?=.*[#$^+=!*()@%&]).{4,20}$/;

/**
 * Text pattern - matches only if the text has at least 4 characters
 * @const
 */
const text = /^((?=.*[a-z])|(?=.*[A-Z])).{4,20}$/;

/**
 * Email pattern - matches only if the text has only email value
 * @const
 */
const email = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

export {password, text, email};
