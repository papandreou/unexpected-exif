Asserts that the given image has EXIF data that [satisfies](http://unexpected.js.org/assertions/any/to-satisfy/) the given spec:

```js#async:true
return expect('magic-pen-6-colours.jpg', 'to have EXIF data satisfying', {
  tags: {
    XResolution: 72,
  },
});
```

You get a diff when the assertion fails:

```js#async:true
return expect('magic-pen-6-colours.jpg', 'to have EXIF data satisfying', {
  tags: {
    XResolution: 96,
  },
});
```

```output
expected magic-pen-6-colours.jpg (image/jpeg)
to have EXIF data satisfying { tags: { XResolution: 96 } }

{
  tags: {
    ProcessingSoftware: 'gThumb 3.0.2',
    Orientation: 1,
    XResolution: 72, // should equal 96
    YResolution: 72,
    ResolutionUnit: 2,
    ModifyDate: 1405268464,
    YCbCrPositioning: 1,
    ColorSpace: 1,
    ExifImageWidth: 380,
    ExifImageHeight: 248
  },
  imageSize: { height: 248, width: 380 },
  thumbnailOffset: 300,
  thumbnailLength: 2152,
  thumbnailType: 6,
  app1Offset: 24
}
```
