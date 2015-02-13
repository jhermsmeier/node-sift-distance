/**
 * SIFT 3
 * @see http://siderite.blogspot.com/2007/04/super-fast-and-accurate-string-distance.html
 * @param  {String|Buffer|Array} s1
 * @param  {String|Buffer|Array} s2
 * @param  {Object} options
 *   @property {Number} maxOffset
 *   @property {Number} maxDistance
 * @return {Number} 
 */
function SIFT( s1, s2, options ) {
  
  options = options != null
    ? options : {}
  
  var s1l = s1.length
  var s2l = s2.length
  
  if( s1l === 0 ) return s2l
  if( s2l === 0 ) return s1l
  
  var maxDistance = options && options.maxDistance
  var maxOffset = options && options.maxOffset ||
    Math.min( s1l, s2l )
  
  var i = 0
  
  var c1 = 0
  var c2 = 0
  
  var lcs = 0
  
  while( ( c1 < s1l ) && ( c2 < s2l ) ) {
    if( s1[ c1 ] === s2[ c2 ] ) {
      lcs++
    } else {
      if( c1 < c2 ) {
        c2 = c1
      } else {
        c1 = c2
      }
      for( i = 0; i < maxOffset; i++ ) {
        if( ( c1 + i < s1l ) && ( s1[ c1 + i ] == s2[c2] ) ) {
          c1 = c1 + i
          break
        }
        if( ( c2 + i < s2l ) && ( s1[c1] == s2[ c2 + i ] ) ) {
          c2 = c2 + i
          break
        }
      }
    }
    c1++
    c2++
  }
  
  if( maxDistance ) {
    var distance = ( c1 + c2 ) / 1.5 - lcs
    if( distance >= maxDistance )
      return Math.round( distance )
  }
  
  return ( s1l + s2l ) / 1.5 - lcs
  
}

module.exports = SIFT
