import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReports } from './reportTargets/ConsoleReports';
import { WinsAnalysis } from './Analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReports';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

summary.buildAndPrintReport(matchReader.matches);
