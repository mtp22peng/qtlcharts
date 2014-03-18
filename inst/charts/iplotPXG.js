// Generated by CoffeeScript 1.6.3
var iplotPXG;

iplotPXG = function(data, chartOpts) {
  var axispos, gen, gnames, height, inferred, margin, mychart, nyticks, phe, pointcolor, pointsize, pointstroke, rectcolor, title, titlepos, width, x, xjitter, xlab, y, yNA, ylab, ylim, yticks, _i, _ref, _ref1, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16, _ref17, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _results;
  gen = (function() {
    var _i, _len, _ref, _results;
    _ref = data.geno[0];
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      x = _ref[_i];
      _results.push(Math.abs(x));
    }
    return _results;
  })();
  inferred = (function() {
    var _i, _len, _ref, _results;
    _ref = data.geno[0];
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      x = _ref[_i];
      _results.push(x < 0);
    }
    return _results;
  })();
  phe = data.pheno;
  gnames = ((function() {
    var _results;
    _results = [];
    for (y in data.genonames) {
      _results.push(data.genonames[y]);
    }
    return _results;
  })())[0];
  height = (_ref = chartOpts != null ? chartOpts.height : void 0) != null ? _ref : 450;
  width = (_ref1 = chartOpts != null ? chartOpts.width : void 0) != null ? _ref1 : 300;
  title = (_ref2 = chartOpts != null ? chartOpts.title : void 0) != null ? _ref2 : "";
  margin = (_ref3 = chartOpts != null ? chartOpts.margin : void 0) != null ? _ref3 : {
    left: 60,
    top: 40,
    right: 40,
    bottom: 40,
    inner: 5
  };
  xlab = (_ref4 = chartOpts != null ? chartOpts.xlab : void 0) != null ? _ref4 : "Genotype";
  ylab = (_ref5 = chartOpts != null ? chartOpts.ylab : void 0) != null ? _ref5 : "Phenotype";
  axispos = (_ref6 = chartOpts != null ? chartOpts.axispos : void 0) != null ? _ref6 : {
    xtitle: 25,
    ytitle: 30,
    xlabel: 5,
    ylabel: 5
  };
  titlepos = (_ref7 = chartOpts != null ? chartOpts.titlepos : void 0) != null ? _ref7 : 20;
  xjitter = (_ref8 = chartOpts != null ? chartOpts.xjitter : void 0) != null ? _ref8 : null;
  ylim = (_ref9 = chartOpts != null ? chartOpts.ylim : void 0) != null ? _ref9 : null;
  yticks = (_ref10 = chartOpts != null ? chartOpts.yticks : void 0) != null ? _ref10 : null;
  nyticks = (_ref11 = chartOpts != null ? chartOpts.nyticks : void 0) != null ? _ref11 : 5;
  rectcolor = (_ref12 = chartOpts != null ? chartOpts.rectcolor : void 0) != null ? _ref12 : d3.rgb(230, 230, 230);
  pointcolor = (_ref13 = chartOpts != null ? chartOpts.pointcolor : void 0) != null ? _ref13 : "slateblue";
  pointsize = (_ref14 = chartOpts != null ? chartOpts.pointsize : void 0) != null ? _ref14 : 3;
  pointstroke = (_ref15 = chartOpts != null ? chartOpts.pointstroke : void 0) != null ? _ref15 : "black";
  yNA = (_ref16 = chartOpts != null ? chartOpts.yNA : void 0) != null ? _ref16 : {
    handle: true,
    force: false,
    width: 15,
    gap: 10
  };
  mychart = dotchart().height(height).width(width).margin(margin).xcategories((function() {
    _results = [];
    for (var _i = 1, _ref17 = gnames.length; 1 <= _ref17 ? _i <= _ref17 : _i >= _ref17; 1 <= _ref17 ? _i++ : _i--){ _results.push(_i); }
    return _results;
  }).apply(this)).xcatlabels(gnames).dataByInd(false).xlab(xlab).ylab(ylab).xvar('geno').yvar('pheno').title(title).axispos(axispos).titlepos(titlepos).xjitter(xjitter).ylim(ylim).yticks(yticks).nyticks(nyticks).rectcolor(rectcolor).pointcolor(pointcolor).pointsize(pointsize).pointstroke(pointstroke).yNA(yNA);
  d3.select("div#chart").datum({
    "geno": gen,
    "pheno": phe,
    "indID": data.indID
  }).call(mychart);
  return mychart.pointsSelect().attr("fill", function(d, i) {
    if (inferred[i]) {
      return "Orchid";
    }
    return "slateblue";
  }).on("click", function(d) {
    var r;
    r = d3.select(this).attr("r");
    return d3.select(this).transition().duration(500).attr("r", r * 3).transition().duration(500).attr("r", r);
  });
};