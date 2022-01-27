<div align="center">
  <h1>MQA</h1>
  <p>
    <strong>Media Query Awesome JavaScript Library.</strong>
  </p>
</div>

## Usage

```
<script src="./mqa.umd.js"></script>
<script>
    mqa.init();
</script>
```

## Default BreakPoint

```
{
    type: 'large',
    deviceType: 'pc',
    query: '(min-width: 1201px)'
},
{
    type: 'middle',
    deviceType: 'tab',
    query: '(max-width: 1200px) and (min-width: 769px)'
},
{
    type: 'small',
    deviceType: 'sp',
    query: '(max-width: 768px)'
}
```

## Public Function

| Function Name  | Argument                   | Argument Type  | return  | Details                                | 
| -------------- |:--------------------------:|:--------------:| ------- | -------------------------------------- |
| init           |                            | null           | void    | initialization                         |
| addEvent       |                            | null           | void    | Add change event for MediaQueryList    |
| resetEvent     |                            | null           | void    | Remove change event for MediaQueryList |
| getState       |                            | null           | State   | Get current state                      |
| getType        |                            | string         | string  | Get current type                       |
| isMatch        | type, deviceType, query    | string         | boolean | Verify MediaQueryList matches.         |
| isType         | 'small', 'middle', 'large' | string         | boolean | Verify MediaQueryList matches.         |
| isDeviceType   | 'sp', 'tab', 'pc'          | string         | boolean | Verify MediaQueryList matches.         |
| isQuery        | media query                | string         | boolean | Verify MediaQueryList matches.         |

## Optional

Using Custom BreakPoint

```
<script>
    mqa.init([
        {
            type: 'large',
            deviceType: 'pc',
            query: '(min-width: 1201px)'
        },
        {
            type: 'middle',
            deviceType: 'tab',
            query: '(max-width: 1200px) and (min-width: 769px)'
        },
        {
            type: 'small',
            deviceType: 'sp',
            query: '(max-width: 768px)'
        }]
    );
</script>
```

## Creators

**Daisuke Takayama**
* [@webcyou](https://twitter.com/webcyou)
* [@panicdragon](https://twitter.com/panicdragon)
* <https://github.com/webcyou>
* <https://github.com/panicdragon>
* <http://www.webcyou.com/>

## Copyright and license
MIT
