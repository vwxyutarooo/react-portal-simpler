## React Portal Simpler
*Just appends React Component to the document.body, Nothing more*

### Hot to use
```
$npm install --save react-portal-simpler
```


```jsx
import Portal from 'react-portal-simpler';

...

render() {
  return(
    <Portal className="sample">
      <div>
        <p>Child elements such as Overlay or Modal or Whatever you want.</p>
      </div>
    </Portal>
  );
}
```

Will return this

```html
<body>
  ...
  <div id="react-root"></div>
  ...
  <div class="sample">
    <div>
      <p>Child elements such as Overlay or Modal or Whatever you want.</p>
    </div>
  </div>
</body>
```


### Props
|Prop|Type|Required|
|---|---|---|
|`children`|element|Yes|
|`classNames`|string|No|
