<p align="center"><img src="https://www.lotmix.com.au/images/Lmix_logo.svg" alt="Lotmix" width="180">
</p>

<h1 align="center">Build Options</h1>

<p align="center">
<img src="https://img.shields.io/badge/licence-Lotmix-green">
<img src="https://img.shields.io/badge/dependencies-jquery%20%3E%3D%203.0-blue">
</p>

### Please visit [Lotmix Api](https://lotmix.com.au/api/v1/docs) for information about the structure of enpoints used in this package

## Disclaimer
This package provides effortless display of your company's house and lot information from [Lotmix](https://lotmix.com.au) on your website.

## Installation & Configuration

add to your html code

```js
<div id='build-options-api'></div>
```
If you want an id with a different name, see below.

add js and ss to your code with cdn

link put in the head tag

```js
 <head>
 ...
 <link href='cdn_url/build-options.css' rel="stylesheet">
 ...
 </head> 
```

script put in the body tag

```js
 <body>
 ... 
 <script src='cdn_url/build-options.js'></script>
 ...
 </head>
```

### Get token

go to [Lotmix Api](https://lotmix.com.au/api/v1/docs):
  - auth section
  - click try it out
  - type in user credentials
  - execute
  - in the response body you will see the token

token must be entered inside the script tag

```js
 <script data-token='your_token' src='cdn_url/build-options.js'></script>
```

you can also change the primary color by specifying the data-primary-color tag in the script tag

```js
 <script data-token='your_token' data-primary-color='#FF7F50' src='cdn_url/build-options.js'></script>
```

change the id name for the entry point

```js
 <script data-token='your_token' data-primary-color='#FF7F50' data-id='your_id_name' src='cdn_url/build-options.js'></script>
```
