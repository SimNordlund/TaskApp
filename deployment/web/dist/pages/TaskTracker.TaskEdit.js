import { LogManager, asProperty, getSubscribedObjectState$, pageScope, getFormExpressionResultFromStore$, toFriendlyId, fromConstant$, available, fromComputation$, getOrElseL, useValue, readUntracked, runInAction, getPreviousValue$, withSideEffect$, ensure, AssertionError, getUI, getData, unavailable, getRuntimeArguments$, onlineData, reactExports, newId, reactDomExports, getHTMLElement, jsxRuntimeExports, requiredArgs, toDate, getLocale, addYears, subYears, addMonths, subMonths, addDays, subDays, toInteger, classNames, DayOfWeek, getFocusableContainer, isMobileDevice, deepEqual, translate, asPluginWidgets, addEnumerations, selectTranslation } from '../index-4mfddfkU.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-Ouf8FsgU.js';
import { Icon, ActionButton, TextProperty, ActionProperty } from '../ActionButton-B2qOJ4td.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-DekUHBTZ.js';
import { AssociationProperty } from '../AssociationProperty-CF1FJ32t.js';
import { Alert, getAriaLabelProps, getValidationAriaProps, FormGroup, TextBox, DerivedUniqueIdProperty, ValidationProperty } from '../TextBox-mUv4K12o.js';
import { DatabaseObjectListProperty } from '../DatabaseObjectListProperty-bv83QC9Y.js';
import { runActionInComputed } from '../DaFVLkxr-BwbOhnke.js';
import { ListAttributeProperty } from '../ListAttributeProperty-B0JILsy2.js';
import { handleDataSourceExecutionError } from '../DGnMnCeA-CZ4oDNF6.js';
import { getClientPagedList$ } from '../DHEha0DV-5IauuTPM.js';
import { MicroflowObjectProperty } from '../MicroflowObjectProperty-DSOqr-FG.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-CAuzrF8_.js';
import { WebStaticImageProperty } from '../WebStaticImageProperty-_lIkqA-b.js';
import { ComboboxWidgetModule } from '../Combobox-8ejWYmFd.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-51nXt5AX.js';
import { Container } from '../Container-Dx2M9vEg.js';
import { DataView } from '../DataView-BR45rEOj.js';
import { isRightToLeft } from '../D2Vzasyw-BMHgR16a.js';
import { Div } from '../Div-DARk7tBI.js';
import { usePersistentState } from '../Y8h_6YnI-C02bM5Tk.js';
import { InlineText } from '../InlineText-C-RvyD35.js';
import { ImageWidgetModule, Text } from '../Text-BEd6XRh9.js';
import { ListView } from '../ListView-D-gr4tYK.js';
import { TextArea } from '../TextArea-DgG3pdIh.js';
import { content as content$1 } from '../TaskTracker.FullScreenPopup-B1J14ntB.js';
import { AttributeProperty } from '../DR_P8f0l-DCAAJywf.js';
import '../D4nQ98US-DIL-lu1k.js';
import '../bdxqAC6d-DAEMpsZ9.js';

const logger$1 = LogManager.get().getLogger(), FileUploadProperty = asProperty((config, store, widgetId, propertyPath) => {
  const object$ = getSubscribedObjectState$(store, config.scope), [subtreeReadonly$] = store.useSlot(pageScope, "subtreeReadonly"), isEditable$ = config.isEditable ? getFormExpressionResultFromStore$(`Conditional editability of ${toFriendlyId(widgetId)}`, config.isEditable, store) : fromConstant$(available(true)), readOnly$ = fromComputation$(`Readonly of ${widgetId}/${propertyPath}`, () => "available" !== object$.dependOn().status || !getOrElseL(isEditable$.dependOn(), false) || Boolean(subtreeReadonly$.dependOn()));
  let validator;
  function setValidator(v) {
    validator = v;
  }
  const [validation$, setValidation] = useValue(`Validation of ${widgetId}/${propertyPath}`, void 0), [, setIsInvalid] = store.useSlot(widgetId, "isInvalid"), [file$, setFile] = useValue(`Selected file of ${widgetId}/${propertyPath}`, void 0);
  function setValue(value) {
    if (readUntracked(readOnly$))
      return void logger$1.debug(`Widget ${toFriendlyId(widgetId)} is attempting to upload a file while it is readonly.`);
    const validation = void 0 !== validator ? validator(value) : void 0;
    runInAction(() => {
      setValidation(validation), setIsInvalid(void 0 !== validation), setFile(value);
    });
  }
  const previousObject$ = getPreviousValue$(object$);
  return function(value$, form$, object$2, thumbnailSize, widgetId2, propertyPath2) {
    let unsubscribe;
    return withSideEffect$(`Upload value of ${widgetId2}/${propertyPath2}`, value$, void 0, () => {
      unsubscribe();
    }, () => {
      const form = ensure(readUntracked(form$))[0];
      unsubscribe = form.listen("submit", (callback, error) => {
        const object = readUntracked(object$2), { value, validation } = readUntracked(value$);
        if (!value || validation)
          return void callback();
        if ("available" !== object.status)
          return void error(new AssertionError());
        const ui = getUI(), pid = ui.showProgress();
        getData().saveDocument(object.value.getGuid(), null, thumbnailSize ?? {}, value, () => {
          ui.hideProgress(pid), callback();
        }, (e) => {
          ui.hideProgress(pid), error(e);
        });
      });
    });
  }(fromComputation$(`File upload value of ${widgetId}/${propertyPath}`, () => {
    const object = getOrElseL(object$.dependOn(), void 0), previousObject = getOrElseL(previousObject$.dependOn() ?? unavailable(), void 0), readOnly = readOnly$.dependOn();
    return (object !== previousObject || readOnly) && runActionInComputed(() => {
      setValidation(void 0), setIsInvalid(false), setFile(void 0);
    }), { readOnly, value: file$.dependOn(), validation: validation$.dependOn(), setValidator, setValue };
  }), store.useSlot(pageScope, "form")[0], object$, config.thumbnailSize, widgetId, propertyPath);
});

const logger = LogManager.get().getLogger(), MicroflowObjectListProperty = asProperty((config, store, widgetId) => {
  const [form$] = store.useSlot(pageScope, "form"), form = readUntracked(form$)?.[0];
  return getClientPagedList$(config, store, widgetId, getRuntimeArguments$(config.argMap, store, widgetId, config.fetchOnlyWithAllParams), async function(args) {
    let result;
    !function(args2) {
      logger.debug(`Fetching data using microflow '${config.operationId}' for widget ${toFriendlyId(widgetId)}`, "parameter mapping:", args2);
    }(args);
    try {
      result = await onlineData().retrieveByMicroflow(config.operationId, args, form);
    } catch (e) {
      return handleDataSourceExecutionError(widgetId, e, "microflow"), unavailable();
    }
    return function({ mxObjects, extra }) {
      logger.debug(`Received ${mxObjects.length} objects and ${extra.length} objects over schema for widget ${toFriendlyId(widgetId)}`, "object ids:", mxObjects.map((o) => o.getGuid()), "extra ids:", extra.map((o) => o.getGuid()));
    }(result), available({ main: result.mxObjects, extra: result.extra });
  });
});

const FocusContainerContext = reactExports.createContext("");
class FocusContainer extends reactExports.Component {
  constructor() {
    super(...arguments), this.id = newId(), this.onFocusHandler = this.onFocus.bind(this), this.onBlurHandler = this.onBlur.bind(this);
  }
  onFocus() {
    this.focused || (this.focused = true, this.props.onEnter && this.props.onEnter());
  }
  onBlur(e) {
    this.isDescendant(e.relatedTarget ?? document.activeElement) ? e.stopPropagation() : (this.focused = false, this.onLeave());
  }
  isDescendant(e) {
    const containerNode = reactDomExports.findDOMNode(this);
    let current = e && getHTMLElement(e);
    for (; current; ) {
      if (current === containerNode || current.getAttribute("data-focuscontainer") === this.id)
        return true;
      current = current.parentElement;
    }
    return false;
  }
  onLeave() {
    this.props.onLeave && this.props.onLeave();
  }
  componentWillUnmount() {
    this.focused && this.onLeave();
  }
  render() {
    return jsxRuntimeExports.jsx(FocusContainerContext.Provider, { value: this.id, children: reactExports.cloneElement(reactExports.Children.only(this.props.children), { onFocus: this.onFocusHandler, onBlur: this.onBlurHandler }) });
  }
}
const createFocusAwarePortal = (children, container, key) => reactDomExports.createPortal(jsxRuntimeExports.jsx(FocusContainerContext.Consumer, { children: (containerId) => reactExports.cloneElement(reactExports.Children.only(children), { ref: (e) => {
  const node = reactDomExports.findDOMNode(e);
  null !== node && containerId && node.setAttribute("data-focuscontainer", containerId);
} }) }), container, key);

function getDaysInMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate), year = date.getFullYear(), monthIndex = date.getMonth(), lastDayOfMonth = /* @__PURE__ */ new Date(0);
  return lastDayOfMonth.setFullYear(year, monthIndex + 1, 0), lastDayOfMonth.setHours(0, 0, 0, 0), lastDayOfMonth.getDate();
}
var DateField, DateFieldFormat, DateTimeFormatType, DateTimeFormatLength, CalendarSystem;
function formatMonth(value, format = DateFieldFormat.Long) {
  const { dates } = getLocale(), index = value - 1;
  switch (format) {
    case DateFieldFormat.Long:
      return ensure(dates.months[index]);
    case DateFieldFormat.Narrow:
    case DateFieldFormat.Short:
      return ensure(dates.shortMonths[index]);
  }
}
function formatDayOfWeek(value, format = DateFieldFormat.Long) {
  const { dates } = getLocale();
  switch (format) {
    case DateFieldFormat.Long:
      return ensure(dates.weekdays[value]);
    case DateFieldFormat.Narrow:
    case DateFieldFormat.Short:
      return ensure(dates.shortWeekdays[value]);
  }
}
!function(DateField2) {
  DateField2.Month = "months", DateField2.DayOfWeek = "days";
}(DateField || (DateField = {})), function(DateFieldFormat2) {
  DateFieldFormat2.Long = "wide", DateFieldFormat2.Short = "abbr", DateFieldFormat2.Narrow = "narrow";
}(DateFieldFormat || (DateFieldFormat = {})), function(DateTimeFormatType2) {
  DateTimeFormatType2.Date = "date", DateTimeFormatType2.Time = "time", DateTimeFormatType2.DateTime = "datetime";
}(DateTimeFormatType || (DateTimeFormatType = {})), function(DateTimeFormatLength2) {
  DateTimeFormatLength2.Short = "short", DateTimeFormatLength2.Medium = "medium", DateTimeFormatLength2.Long = "long", DateTimeFormatLength2.Full = "full";
}(DateTimeFormatLength || (DateTimeFormatLength = {})), function(CalendarSystem2) {
  CalendarSystem2.Gregorian = "gregorian", CalendarSystem2.ThaiBuddhist = "thai-buddhist";
}(CalendarSystem || (CalendarSystem = {}));
class LocalDate {
  constructor(year, monthOfYear, dayOfMonth, chronology) {
    this.year = year, this.monthOfYear = monthOfYear, this.dayOfMonth = dayOfMonth, this.chronology = chronology;
  }
  isSameDate(date) {
    return this.chronology === date.chronology && this.getYear() === date.getYear() && this.getMonthOfYear() === date.getMonthOfYear() && this.getDayOfMonth() === date.getDayOfMonth();
  }
  getChronology() {
    return this.chronology;
  }
  getYear() {
    return this.year;
  }
  getMonthOfYear() {
    return this.monthOfYear;
  }
  getDayOfMonth() {
    return this.dayOfMonth;
  }
  getDayOfWeek() {
    return this.chronology.getDayOfWeek(this);
  }
  lengthOfYearInMonths() {
    return this.chronology.lengthOfYearInMonths(this.year);
  }
  plusYears(years) {
    return this.chronology.plusYears(this, years);
  }
  plusMonths(months) {
    return this.chronology.plusMonths(this, months);
  }
  plusDays(days) {
    return this.chronology.plusDays(this, days);
  }
  minusYears(years) {
    return this.chronology.minusYears(this, years);
  }
  minusMonths(months) {
    return this.chronology.minusMonths(this, months);
  }
  minusDays(days) {
    return this.chronology.minusDays(this, days);
  }
  withDayOfMonth(dayOfMonth) {
    return this.chronology.withDayOfMonth(this, dayOfMonth);
  }
  withMonthOfYear(monthOfYear) {
    return this.chronology.withMonthOfYear(this, monthOfYear);
  }
  withYear(year) {
    return this.chronology.withYear(this, year);
  }
  toJsDate() {
    return this.chronology.toJsDate(this);
  }
  toString() {
    const month = zeroPadLeft$1(this.monthOfYear, 2), day = zeroPadLeft$1(this.dayOfMonth, 2), dayOfWeek = weekDays[this.getDayOfWeek()], calendarSystem = this.getChronology().getCalendarSystem();
    return `${this.year}-${month}-${day} ${dayOfWeek} (${calendarSystem})`;
  }
}
function zeroPadLeft$1(n, len) {
  const num = n.toString();
  return new Array(len - num.length + 1).join("0") + num;
}
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
class LocalTime {
  constructor(hour = 0, minute = 0, second = 0, millisecond = 0) {
    this.hour = hour, this.minute = minute, this.second = second, this.millisecond = millisecond;
  }
  getHour() {
    return this.hour;
  }
  getMinute() {
    return this.minute;
  }
  getSecond() {
    return this.second;
  }
  getMillisecond() {
    return this.millisecond;
  }
  isSameTime(time) {
    return this.hour === time.hour && this.minute === time.minute && this.second === time.second && this.millisecond === time.millisecond;
  }
  toString() {
    return zeroPadLeft(this.hour, 2) + ":" + zeroPadLeft(this.minute, 2) + ":" + zeroPadLeft(this.second, 2) + "." + zeroPadLeft(this.millisecond, 3);
  }
}
function zeroPadLeft(n, len) {
  const num = n.toString();
  return new Array(len - num.length + 1).join("0") + num;
}
class Chronology {
  constructor(calendarSystem) {
    this.calendarSystem = calendarSystem;
  }
  getCalendarSystem() {
    return this.calendarSystem;
  }
  convertInput(date) {
    if (date.getChronology() !== this)
      throw new Error(`Incompatible chronology: LocalDate should be ${this.getCalendarSystem()} but was ${date.getChronology().getCalendarSystem()}`);
    return { localDate: date instanceof LocalDate ? date : date.getDate(), localTime: date instanceof LocalDate ? new LocalTime() : date.getTime() };
  }
  static getInstance() {
    return this.instance;
  }
}
class LocalDateTime {
  constructor(date, time = new LocalTime()) {
    this.date = date, this.time = time;
  }
  getDate() {
    return this.date;
  }
  getTime() {
    return this.time;
  }
  withDate(newDate) {
    return new LocalDateTime(newDate, this.time);
  }
  withTime(newTime) {
    return new LocalDateTime(this.date, newTime);
  }
  toJsDate() {
    return this.date.getChronology().toJsDate(this);
  }
  isSameDateTime(dateTime) {
    return this.date.isSameDate(dateTime.date) && this.time.isSameTime(dateTime.time);
  }
  getChronology() {
    return this.date.getChronology();
  }
  toString() {
    return this.date.toString() + " " + this.time.toString();
  }
}
class GregorianChronology extends Chronology {
  constructor(yearOffset = 0, calendarSystem = CalendarSystem.Gregorian) {
    super(calendarSystem), this.yearOffset = yearOffset;
  }
  getDayOfWeek(date) {
    return function(dirtyDate) {
      return requiredArgs(1, arguments), toDate(dirtyDate).getDay();
    }(this.toJsDate(date));
  }
  lengthOfMonthInDays(year, month) {
    return getDaysInMonth(new Date(year, month - 1, 1));
  }
  lengthOfYearInMonths(_year) {
    return 12;
  }
  plusYears(date, years) {
    return convert(this.fromJsDate(addYears(this.toJsDate(date), years)), date);
  }
  minusYears(date, years) {
    return convert(this.fromJsDate(subYears(this.toJsDate(date), years)), date);
  }
  plusMonths(date, months) {
    return convert(this.fromJsDate(addMonths(this.toJsDate(date), months)), date);
  }
  minusMonths(date, months) {
    return convert(this.fromJsDate(subMonths(this.toJsDate(date), months)), date);
  }
  plusDays(date, days) {
    return convert(this.fromJsDate(addDays(this.toJsDate(date), days)), date);
  }
  minusDays(date, days) {
    return convert(this.fromJsDate(subDays(this.toJsDate(date), days)), date);
  }
  withDayOfMonth(date, dayOfMonth) {
    return convert(this.fromJsDate(function(dirtyDate, dirtyDayOfMonth) {
      requiredArgs(2, arguments);
      var date2 = toDate(dirtyDate), dayOfMonth2 = toInteger(dirtyDayOfMonth);
      return date2.setDate(dayOfMonth2), date2;
    }(this.toJsDate(date), dayOfMonth)), date);
  }
  withMonthOfYear(date, monthOfYear) {
    return convert(this.fromJsDate(function(dirtyDate, dirtyMonth) {
      requiredArgs(2, arguments);
      var date2 = toDate(dirtyDate), month = toInteger(dirtyMonth), year = date2.getFullYear(), day = date2.getDate(), dateWithDesiredMonth = /* @__PURE__ */ new Date(0);
      dateWithDesiredMonth.setFullYear(year, month, 15), dateWithDesiredMonth.setHours(0, 0, 0, 0);
      var daysInMonth = getDaysInMonth(dateWithDesiredMonth);
      return date2.setMonth(month, Math.min(day, daysInMonth)), date2;
    }(this.toJsDate(date), monthOfYear - 1)), date);
  }
  withYear(date, year) {
    return convert(this.fromJsDate(function(dirtyDate, dirtyYear) {
      requiredArgs(2, arguments);
      var date2 = toDate(dirtyDate), year2 = toInteger(dirtyYear);
      return isNaN(date2.getTime()) ? /* @__PURE__ */ new Date(NaN) : (date2.setFullYear(year2), date2);
    }(this.toJsDate(date), year)), date);
  }
  fromJsDate(date) {
    const localDate = new LocalDate(date.getFullYear() + this.yearOffset, date.getMonth() + 1, date.getDate(), this), localTime = new LocalTime(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    return new LocalDateTime(localDate, localTime);
  }
  toJsDate(date) {
    const { localDate, localTime } = this.convertInput(date);
    return new Date(localDate.getYear() - this.yearOffset, localDate.getMonthOfYear() - 1, localDate.getDayOfMonth(), localTime.getHour(), localTime.getMinute(), localTime.getSecond(), localTime.getMillisecond());
  }
}
function convert(result, inputType) {
  return inputType instanceof LocalDate ? result.getDate() : result;
}
GregorianChronology.instance = new GregorianChronology();
class ThaiBuddhistChronology extends GregorianChronology {
}
function getChronology() {
  switch (/th$/i.test(getLocale().languageTag) ? CalendarSystem.ThaiBuddhist : CalendarSystem.Gregorian) {
    case CalendarSystem.ThaiBuddhist:
      return ThaiBuddhistChronology.getInstance();
    case CalendarSystem.Gregorian:
      return GregorianChronology.getInstance();
  }
}
ThaiBuddhistChronology.instance = new ThaiBuddhistChronology(543, CalendarSystem.ThaiBuddhist);
class AbsolutePositioned extends reactExports.PureComponent {
  render() {
    const child = reactExports.Children.only(this.props.children), positionProps = Object.keys(this.props).filter((key) => ["top", "right", "bottom", "left"].includes(key)).map((key) => ({ [key]: `${this.props[key]}px` })), style = Object.assign({ ...child.props.style, position: this.props.position ?? "absolute" }, ...positionProps);
    return reactExports.cloneElement(child, { style });
  }
}
var RelativeMonth;
!function(RelativeMonth2) {
  RelativeMonth2.Current = "current", RelativeMonth2.Previous = "previous", RelativeMonth2.Next = "next";
}(RelativeMonth || (RelativeMonth = {}));
class Day extends reactExports.Component {
  constructor() {
    super(...arguments), this.onClickHandler = this.onClick.bind(this);
  }
  onClick() {
    this.props.onSelect(this.props.date);
  }
  componentDidMount() {
    this.focusIfHighlighted();
  }
  componentDidUpdate() {
    this.focusIfHighlighted();
  }
  focusIfHighlighted() {
    this.props.isCalendarFocused && this.props.isHighlighted && this.focus();
  }
  focus() {
    this.ref && this.ref.focus();
  }
  render() {
    return jsxRuntimeExports.jsx("td", { className: classNames({ "mx-calendar-day-month-current": this.props.relativeMonth === RelativeMonth.Current, "mx-calendar-day-month-previous": this.props.relativeMonth === RelativeMonth.Previous, "mx-calendar-day-month-next": this.props.relativeMonth === RelativeMonth.Next, "mx-calendar-day-selected": this.props.isSelected, "mx-calendar-day-active": this.props.isHighlighted, "mx-calendar-day-today": this.props.isToday }), role: "gridcell", onClick: this.onClickHandler, tabIndex: this.props.isHighlighted ? 0 : -1, "aria-label": this.props.dayLabel, "aria-selected": this.props.isSelected, ref: (e) => this.ref = e ?? void 0, children: this.props.date.getDayOfMonth() });
  }
}
const Week = (props) => jsxRuntimeExports.jsx("tr", { role: "row", children: props.days.map((dayInfo) => reactExports.createElement(Day, { ...dayInfo, isSelected: !!props.selectedDate && dayInfo.date.isSameDate(props.selectedDate), isHighlighted: dayInfo.date.isSameDate(props.highlightedDate), isCalendarFocused: props.isCalendarFocused, isToday: dayInfo.date.isSameDate(props.today), dayLabel: props.dayFormatter(dayInfo.date), onSelect: props.onSelect, key: dayInfo.date.getDayOfMonth() })) }), WeekDay = (props) => jsxRuntimeExports.jsx("th", { role: "columnheader", scope: "col", title: formatDayOfWeek(props.day), children: formatDayOfWeek(props.day, DateFieldFormat.Narrow) }), allDays = [DayOfWeek.Sunday, DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday, DayOfWeek.Saturday];
function WeekDaysRow(props) {
  const days = allDays.slice(props.firstDayOfWeek).concat(allDays.slice(0, props.firstDayOfWeek));
  return jsxRuntimeExports.jsx("tr", { role: "row", children: days.map((day) => jsxRuntimeExports.jsx(WeekDay, { day }, day)) });
}
class Month extends reactExports.Component {
  constructor() {
    super(...arguments), this.prepareWeeks = () => function(currentDate, firstDayOfWeek) {
      const currentMonth = currentDate.getMonthOfYear(), firstDayOfCurrentMonth = currentDate.withDayOfMonth(1), dayShift = (firstDayOfCurrentMonth.getDayOfWeek() - firstDayOfWeek + 7) % 7, firstCalendarMatrixDay = firstDayOfCurrentMonth.minusDays(dayShift);
      let day = 0;
      const daysByWeeks = [];
      for (let w = 0; w < 6; w++) {
        const week = [];
        for (let dow = 0; dow < 7; dow++, day++) {
          const date = firstCalendarMatrixDay.plusDays(day), relativeMonth = getRelativeMonth(day, dayShift, currentMonth === date.getMonthOfYear());
          week.push({ date, relativeMonth });
        }
        daysByWeeks.push(week);
      }
      return daysByWeeks;
    }(this.props.highlightedDate, this.props.firstDayOfWeek);
  }
  renderHead() {
    return jsxRuntimeExports.jsx("thead", { children: jsxRuntimeExports.jsx(WeekDaysRow, { firstDayOfWeek: this.props.firstDayOfWeek }) });
  }
  renderBody() {
    const today = getChronology().fromJsDate(new Date(Date.now())).getDate();
    return jsxRuntimeExports.jsx("tbody", { children: this.prepareWeeks().map((week, index) => jsxRuntimeExports.jsx(Week, { days: week, selectedDate: this.props.selectedDate, highlightedDate: this.props.highlightedDate, isCalendarFocused: this.props.isCalendarFocused, dayFormatter: this.props.dayFormatter, onSelect: this.props.onDateSelect, today }, index)) });
  }
  render() {
    return jsxRuntimeExports.jsxs("table", { role: "grid", summary: formatMonth(this.props.highlightedDate.getMonthOfYear()), children: [this.renderHead(), this.renderBody()] });
  }
}
function getRelativeMonth(day, dayShift, isCurrentMonth) {
  return day < dayShift ? RelativeMonth.Previous : isCurrentMonth ? RelativeMonth.Current : RelativeMonth.Next;
}
class MonthDropDown extends reactExports.Component {
  constructor() {
    super(...arguments), this.state = { showDropDown: false }, this.id = newId("MonthDropDown"), this.onClickHandler = this.onClick.bind(this), this.onLeaveHandler = this.onLeave.bind(this), this.onSelectHandler = this.onSelect.bind(this);
  }
  onClick() {
    this.setState((prev) => ({ showDropDown: !prev.showDropDown }));
  }
  onLeave() {
    this.setState({ showDropDown: false });
  }
  onSelect(date) {
    this.props.onChange(date);
  }
  render() {
    return jsxRuntimeExports.jsx(FocusContainer, { onLeave: this.onLeaveHandler, children: jsxRuntimeExports.jsxs("div", { className: "mx-calendar-month-dropdown", onClick: this.onClickHandler, tabIndex: -1, role: "button", id: this.id, "aria-haspopup": "true", "aria-expanded": this.state.showDropDown, "aria-owns": `${this.id}_mdd`, children: [jsxRuntimeExports.jsx(MonthLabel, { highlightedDate: this.props.highlightedDate }), jsxRuntimeExports.jsx(Icon, { icon: { type: "icon", iconClass: "mx-icon-filled mx-icon-chevron-down" } }), this.renderOptions()] }) });
  }
  renderOptions() {
    return this.state.showDropDown && jsxRuntimeExports.jsx(MonthOptions, { highlightedDate: this.props.highlightedDate, onSelect: this.onSelectHandler, parentId: this.id });
  }
}
class MonthLabel extends reactExports.PureComponent {
  render() {
    return jsxRuntimeExports.jsxs("div", { className: "mx-calendar-month-current", children: [jsxRuntimeExports.jsx("div", { className: "mx-calendar-month-spacer", "aria-hidden": "true", children: monthsRange(this.props.highlightedDate).map((month) => jsxRuntimeExports.jsx("div", { children: formatMonth(month) }, month)) }), jsxRuntimeExports.jsx("div", { className: "mx-calendar-month-label", children: formatMonth(this.props.highlightedDate.getMonthOfYear()) })] });
  }
}
class MonthOptions extends reactExports.PureComponent {
  render() {
    return jsxRuntimeExports.jsx("div", { className: "mx-calendar-month-dropdown-options", id: `${this.props.parentId}_mdd`, children: monthsRange(this.props.highlightedDate).map((month) => jsxRuntimeExports.jsx(MonthOption, { month, onSelect: () => this.props.onSelect(this.props.highlightedDate.withMonthOfYear(month)) }, month)) });
  }
}
const MonthOption = ({ month, onSelect }) => jsxRuntimeExports.jsx("div", { onClick: onSelect, children: formatMonth(month) }), monthsRange = (date) => Array.from(Array(date.lengthOfYearInMonths()).keys()).map((i) => i + 1), MonthHeader = (props) => jsxRuntimeExports.jsxs("div", { className: "mx-calendar-month-header", "aria-hidden": "true", children: [jsxRuntimeExports.jsx("button", { className: "mx-calendar-month-previous", tabIndex: -1, onClick: () => props.onChange(props.highlightedDate.minusMonths(1)), children: jsxRuntimeExports.jsx(Icon, { icon: { type: "icon", iconClass: "mx-icon-filled mx-icon-substract" } }) }), jsxRuntimeExports.jsx(MonthDropDown, { highlightedDate: props.highlightedDate, onChange: props.onChange }), jsxRuntimeExports.jsx("button", { className: "mx-calendar-month-next", tabIndex: -1, onClick: () => props.onChange(props.highlightedDate.plusMonths(1)), children: jsxRuntimeExports.jsx(Icon, { icon: { type: "icon", iconClass: "mx-icon-filled mx-icon-add" } }) })] }), YearSwitcher = (props) => {
  const prevYear = props.highlightedDate.minusYears(1), nextYear = props.highlightedDate.plusYears(1);
  return jsxRuntimeExports.jsxs("div", { className: "mx-calendar-year-switcher", role: "presentation", children: [jsxRuntimeExports.jsx(YearButton, { type: "previous", year: prevYear.getYear(), onSelect: () => props.onChange(prevYear) }), jsxRuntimeExports.jsx(YearButton, { type: "selected", year: props.highlightedDate.getYear() }), jsxRuntimeExports.jsx(YearButton, { type: "next", year: nextYear.getYear(), onSelect: () => props.onChange(nextYear) })] });
}, YearButton = ({ type, onSelect, year }) => jsxRuntimeExports.jsx("span", { className: `mx-calendar-year-${type}`, tabIndex: -1, onClick: onSelect, children: year });
class Calendar extends reactExports.Component {
  constructor() {
    super(...arguments), this.state = Calendar.getStateFromProps(this.props, { isFocused: false, highlightedDate: this.props.defaultDate }), this.onDateSelectHandler = this.onDateSelect.bind(this), this.onHighlightedDateChangeHandler = this.onHighlightedDateChange.bind(this), this.onKeyDownHandler = this.onKeyDown.bind(this), this.onKeyUpHandler = this.onKeyUp.bind(this), this.onEnterHandler = this.onEnter.bind(this), this.onLeaveHandler = this.onLeave.bind(this), this.onMouseDownHandler = this.onMouseDown.bind(this);
  }
  componentDidMount() {
    this.focus();
  }
  UNSAFE_componentWillReceiveProps(newProps) {
    newProps.selectedDate && !this.props.selectedDate?.isSameDate(newProps.selectedDate) && this.setState((curState) => Calendar.getStateFromProps(newProps, curState));
  }
  onDateSelect(date) {
    this.props.onChange(date);
  }
  onHighlightedDateChange(highlightedDate) {
    this.setHighlightedDate(highlightedDate);
  }
  setHighlightedDate(highlightedDate) {
    this.setState({ highlightedDate });
  }
  onKeyDown(e) {
    const current = this.state.highlightedDate, rightToLeft = this.props.rightToLeft;
    switch (e.key) {
      case "ArrowUp":
        this.setHighlightedDate(current.minusDays(7));
        break;
      case "ArrowDown":
        this.setHighlightedDate(current.plusDays(7));
        break;
      case "ArrowLeft":
        this.setHighlightedDate(rightToLeft ? current.plusDays(1) : current.minusDays(1));
        break;
      case "ArrowRight":
        this.setHighlightedDate(rightToLeft ? current.minusDays(1) : current.plusDays(1));
        break;
      case "PageUp":
        this.setHighlightedDate(e.ctrlKey || e.altKey ? current.minusYears(1) : current.minusMonths(1));
        break;
      case "PageDown":
        this.setHighlightedDate(e.ctrlKey || e.altKey ? current.plusYears(1) : current.plusMonths(1));
        break;
      case "Home":
        this.setHighlightedDate(current.withDayOfMonth(1));
        break;
      case "End":
        this.setHighlightedDate(current.withDayOfMonth(1).plusMonths(1).minusDays(1));
        break;
      default:
        return;
    }
    e.preventDefault(), e.stopPropagation();
  }
  onKeyUp(e) {
    const current = this.state.highlightedDate;
    switch (e.key) {
      case " ":
      case "Enter":
        this.onDateSelect(current);
        break;
      default:
        return;
    }
    e.preventDefault(), e.stopPropagation();
  }
  focus() {
    this.setState({ isFocused: true });
  }
  onEnter() {
    this.setState({ isFocused: true });
  }
  onLeave() {
    this.setState({ isFocused: false });
  }
  onMouseDown(e) {
    const focusableContainer = getFocusableContainer(e.target);
    focusableContainer ? (e.preventDefault(), focusableContainer.focus()) : (e.preventDefault(), this.focus());
  }
  render() {
    return jsxRuntimeExports.jsx(FocusContainer, { onEnter: this.onEnterHandler, onLeave: this.onLeaveHandler, children: jsxRuntimeExports.jsxs("div", { className: "mx-calendar", role: "presentation", style: this.props.style, onKeyDown: this.onKeyDownHandler, onKeyUp: this.onKeyUpHandler, onMouseDown: this.onMouseDownHandler, children: [jsxRuntimeExports.jsx(MonthHeader, { highlightedDate: this.state.highlightedDate, onChange: this.onHighlightedDateChangeHandler }), jsxRuntimeExports.jsx(Month, { selectedDate: this.props.selectedDate, highlightedDate: this.state.highlightedDate, isCalendarFocused: this.state.isFocused, firstDayOfWeek: this.props.firstDayOfWeek, dayFormatter: this.props.dayFormatter, onDateSelect: this.onDateSelectHandler }), jsxRuntimeExports.jsx(YearSwitcher, { highlightedDate: this.state.highlightedDate, onChange: this.onHighlightedDateChangeHandler })] }) });
  }
  static getStateFromProps(props, state) {
    return { highlightedDate: (state.isFocused ? state.highlightedDate : void 0) ?? props.selectedDate ?? props.defaultDate, isFocused: state.isFocused };
  }
}
class AnimationFrameHandler extends reactExports.Component {
  constructor() {
    super(...arguments), this.onAnimationFrameHandler = this.onAnimationFrame.bind(this);
  }
  componentDidMount() {
    this.requestFrame();
  }
  requestFrame() {
    this.requestId = window.requestAnimationFrame(this.onAnimationFrameHandler);
  }
  componentWillUnmount() {
    window.cancelAnimationFrame(this.requestId);
  }
  onAnimationFrame() {
    this.props.callback(), this.requestFrame();
  }
  render() {
    return null;
  }
}
class PositionObserver extends reactExports.Component {
  constructor() {
    super(...arguments), this.onAnimationFrameHandler = this.onAnimationFrame.bind(this);
  }
  onAnimationFrame() {
    this.element || (this.element = reactDomExports.findDOMNode(this) ?? void 0);
    const position = this.element?.getBoundingClientRect();
    PositionObserver.shouldUpdatePosition(position, this.position) && (this.position = position, this.props.callback(position));
  }
  componentWillUnmount() {
    delete this.element;
  }
  render() {
    const child = reactExports.cloneElement(reactExports.Children.only(this.props.children), { key: 1 });
    return jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [child, this.props.active ? jsxRuntimeExports.jsx(AnimationFrameHandler, { callback: this.onAnimationFrameHandler }, 2) : null] });
  }
  static shouldUpdatePosition(a, b) {
    return !a || !b || a.height !== b.height || a.width !== b.width || a.bottom !== b.bottom || a.top !== b.top || a.left !== b.left || a.right !== b.right;
  }
}
class DatePicker extends reactExports.Component {
  constructor() {
    var props, calendarSystem;
    super(...arguments), this.chronology = getChronology(), this.native = (props = this.props, calendarSystem = this.chronology.getCalendarSystem(), isMobileDevice() && function(type) {
      const input = document.createElement("input");
      return input.type = type, input.value = ":)", input.type === type && ":)" !== input.value;
    }(getNativeInputType(props.mode)) && calendarSystem !== CalendarSystem.ThaiBuddhist), this.defaultFormatter = this.props.inputValue.formatter, this.formatter = this.createFormatter(this.defaultFormatter), this.dayFormatter = this.createDayFormatter(this.defaultFormatter), this.defaultPlaceholder = this.defaultFormatter.getFormatPlaceholder() ?? "", this.state = { showCalendar: false }, this.onChangeHandler = this.onChange.bind(this), this.onKeyUpHandler = this.onKeyUp.bind(this), this.onInputKeyUpHandler = this.onInputKeyUp.bind(this), this.onButtonClickHandler = this.onButtonClick.bind(this), this.onInputPositionHandler = this.onInputPosition.bind(this), this.onCalendarPositionHandler = this.onCalendarPosition.bind(this), this.onSelectDateHandler = this.onSelectDate.bind(this), this.onEnterHandler = this.onEnter.bind(this), this.onLeaveHandler = this.onLeave.bind(this), this.today = this.chronology.fromJsDate(/* @__PURE__ */ new Date()).getDate();
  }
  createFormatter(defaultFormatter) {
    return this.native ? defaultFormatter.withConfig({ type: "custom", pattern: getNativeFormat(this.props.mode) }) : defaultFormatter;
  }
  createDayFormatter(defaultFormatter) {
    const dayFormatter = defaultFormatter.withConfig({ type: "date" });
    return (day) => dayFormatter.format(day.toJsDate());
  }
  componentDidUpdate(prevProps, prevState) {
    if (setTimeout(() => {
      this.inputRef && (this.inputRef.defaultValue = "");
    }, 0), !prevState.editedValue)
      return;
    const { value: newValue, displayValue: newDisplayValue } = this.props.inputValue, { value: oldValue, displayValue: oldDisplayValue } = prevProps.inputValue;
    !this.props.inputValue.readOnly && deepEqual(newValue, oldValue) && newDisplayValue === oldDisplayValue || this.setState({ editedValue: void 0 });
  }
  toLocalDateTime(date) {
    return date && this.chronology.fromJsDate(date);
  }
  formatValue(value) {
    const date = value instanceof LocalDateTime ? value.toJsDate() : value;
    return this.formatter.format(date);
  }
  onChange(e) {
    this.setState({ editedValue: this.parseValue(e.target.value) }, () => {
      this.native && this.submitValue();
    });
  }
  parseValue(displayValue) {
    displayValue = this.native && displayValue.length > 16 ? displayValue.substring(0, 16) : displayValue;
    const fallbackDate = this.props.inputValue.value, parseResult = this.formatter.parse(displayValue, fallbackDate);
    return { displayValue, internalValue: parseResult.valid ? { valid: true, value: this.toLocalDateTime(parseResult.value) } : parseResult };
  }
  combineDateTime(oldValue, newValue) {
    if (!oldValue || !newValue)
      return newValue;
    switch (this.props.mode) {
      case "date":
        return newValue.withTime(oldValue.getTime());
      case "time":
        return newValue.withDate(oldValue.getDate());
      case "datetime":
        return newValue;
    }
    throw new Error(`Unknown date picker mode '${this.props.mode}`);
  }
  onEnter() {
    this.dispatchAction("onEnter");
  }
  onLeave() {
    this.submitValue(), this.closeCalendar(), this.dispatchAction("onLeave");
  }
  submitValue() {
    const editedValue = this.state.editedValue;
    if (editedValue) {
      if (editedValue.internalValue.valid) {
        const oldValue = this.toLocalDateTime(this.props.inputValue.value), newValue = this.combineDateTime(oldValue, editedValue.internalValue.value);
        b = oldValue, ((a = newValue) && b ? a.isSameDateTime(b) : a === b) && this.parseValue(this.props.inputValue.displayValue).internalValue.valid || this.props.inputValue.setValue(newValue ? newValue.toJsDate() : void 0);
      } else
        editedValue.displayValue !== this.props.inputValue.displayValue && this.props.inputValue.setTextValue(editedValue.displayValue);
      var a, b;
      this.setState({ editedValue: void 0 });
    }
  }
  onKeyUp(e) {
    "Escape" === e.key && this.closeCalendarAndFocusInput();
  }
  onInputKeyUp(e) {
    "ArrowDown" === e.key && this.supportsCalendar() ? this.openCalendar() : "Enter" === e.key && (this.submitValue(), this.closeCalendar()), this.props.onInputKeyUp && this.props.onInputKeyUp(e);
  }
  supportsCalendar() {
    return !this.native && this.props.showCalendarButton;
  }
  onButtonClick() {
    this.state.showCalendar ? this.closeCalendarAndFocusInput() : this.openCalendar();
  }
  dispatchAction(property) {
    const prop = this.props[property];
    "available" === this.props.inputValue.status && prop && prop.execute();
  }
  onInputPosition(position) {
    this.setState({ inputPosition: position });
  }
  onCalendarPosition(position) {
    this.setState({ calendarSize: position ? { width: position.width, height: position.height } : void 0 });
  }
  onSelectDate(date) {
    let dateTime = new LocalDateTime(date);
    if (void 0 !== this.state.editedValue) {
      const previousValue = this.state.editedValue.internalValue;
      previousValue.valid && void 0 !== previousValue.value && (dateTime = new LocalDateTime(date, previousValue.value.getTime()));
    } else {
      const previousValue = this.toLocalDateTime(this.props.inputValue.value);
      dateTime = new LocalDateTime(date, previousValue?.getTime());
    }
    const editedValue = { displayValue: this.formatValue(dateTime), internalValue: { valid: true, value: dateTime } };
    this.setState({ editedValue }, () => this.submitValue()), this.closeCalendarAndFocusInput();
  }
  openCalendar() {
    this.setState({ showCalendar: true }, () => this.calendarRef?.focus());
  }
  closeCalendarAndFocusInput() {
    this.closeCalendar(), this.inputRef && this.inputRef.focus();
  }
  closeCalendar() {
    this.setState({ showCalendar: false, calendarSize: void 0 });
  }
  getDisplayValue() {
    return void 0 !== this.state.editedValue ? this.state.editedValue.displayValue : this.native ? this.formatValue(this.props.inputValue.value) : this.props.inputValue.displayValue;
  }
  render() {
    return jsxRuntimeExports.jsxs(reactExports.Fragment, { children: ["control" !== this.props.readOnlyStyle && this.props.inputValue.readOnly ? this.renderAsText() : this.renderAsInput(), jsxRuntimeExports.jsx(Alert, { id: `${this.props.id}-error`, validation: this.props.inputValue.validation })] });
  }
  renderAsInput() {
    return jsxRuntimeExports.jsx(FocusContainer, { onEnter: this.onEnterHandler, onLeave: this.onLeaveHandler, children: jsxRuntimeExports.jsxs("div", { className: "mx-compound-control", onKeyUp: this.onKeyUpHandler, children: [jsxRuntimeExports.jsx(PositionObserver, { active: this.state.showCalendar, callback: this.onInputPositionHandler, children: jsxRuntimeExports.jsx("input", { className: classNames("form-control", { "has-value": this.native && !!this.getDisplayValue() }), type: this.native ? getNativeInputType(this.props.mode) : "text", value: this.getDisplayValue(), placeholder: this.props.inputValue.readOnly ? void 0 : this.props.placeholder.value && this.props.placeholder.value.length > 0 ? this.props.placeholder.value : this.native ? "\xA0" : this.defaultPlaceholder, id: this.props.id, tabIndex: this.props.tabIndex, disabled: this.props.inputValue.readOnly, onChange: this.onChangeHandler, onKeyUp: this.onInputKeyUpHandler, ref: (e) => this.inputRef = e ?? void 0, "data-handles-escape": this.state.showCalendar || void 0, ...getAriaLabelProps(this.props.ariaLabel?.value), ...getValidationAriaProps(this.props.inputValue.validation, this.props.id), "aria-required": this.props.ariaRequired }) }), this.renderButton(), this.renderCalendar()] }) });
  }
  renderButton() {
    const value = this.props.inputValue;
    return "available" === value.status && this.supportsCalendar() ? jsxRuntimeExports.jsx("button", { type: "button", className: "btn mx-button", "aria-label": this.props.buttonLabel.value, tabIndex: -1, disabled: value.readOnly, onClick: this.onButtonClickHandler, "data-handles-escape": this.state.showCalendar || void 0, children: jsxRuntimeExports.jsx("span", { className: "mx-icon-filled mx-icon-calendar" }) }) : null;
  }
  renderAsText() {
    return jsxRuntimeExports.jsx("div", { className: "form-control-static", children: this.props.inputValue.displayValue || "\xA0" });
  }
  renderCalendar() {
    if (!this.state.showCalendar || !this.state.inputPosition)
      return null;
    let horizontal = {}, vertical = {};
    if (this.state.calendarSize) {
      const { clientWidth, clientHeight } = document.body, input = this.state.inputPosition, height = this.state.calendarSize.height;
      horizontal = isRightToLeft() ? { right: clientWidth - input.right } : { left: input.left }, vertical = clientHeight >= input.bottom + height ? { top: input.bottom } : input.top >= height ? { bottom: clientHeight - input.top } : { bottom: 0 };
    }
    const currentValue = this.state.editedValue ? this.state.editedValue.internalValue.valid ? this.state.editedValue.internalValue.value : void 0 : this.toLocalDateTime(this.props.inputValue.value), selectedDate = void 0 !== currentValue ? currentValue.getDate() : void 0, firstDayOfWeek = getLocale().firstDayOfWeek;
    return createFocusAwarePortal(jsxRuntimeExports.jsx(PositionObserver, { active: true, callback: this.onCalendarPositionHandler, children: jsxRuntimeExports.jsx(AbsolutePositioned, { position: "fixed", ...horizontal, ...vertical, children: jsxRuntimeExports.jsx(Calendar, { selectedDate, defaultDate: this.today, onChange: this.onSelectDateHandler, firstDayOfWeek, rightToLeft: isRightToLeft(), dayFormatter: this.dayFormatter, ref: (e) => this.calendarRef = e ?? void 0, style: this.state.calendarSize ? {} : { opacity: 0 } }) }) }), document.body);
  }
}
function getNativeInputType(mode) {
  switch (mode) {
    case "date":
      return "date";
    case "time":
      return "time";
    case "datetime":
      return "datetime-local";
  }
}
function getNativeFormat(mode) {
  switch (mode) {
    case "date":
      return "yyyy-MM-dd";
    case "time":
      return "HH:mm";
    case "datetime":
      return "yyyy-MM-dd'T'HH:mm";
  }
}

function FileDownloader(props) {
  return jsxRuntimeExports.jsxs("button", { type: "button", disabled: !props.download.value, className: "btn mx-button mx-fileinput-download-button", id: `${props.id}-download`, "aria-labelledby": `${props.id}-label ${props.id}-download`, onClick: (e) => function(e2, file, showInBrowser) {
    if (e2.stopPropagation(), !file)
      return;
    if (showInBrowser) {
      const url = `${file.uri}&target=window`;
      window.open(url, "mendix_file");
    } else
      window.open(`${file.uri}&target=inline`, "_self");
  }(e, props.download.value, props.showInBrowser), children: [translate("mxui.widget.FileInput", "download"), jsxRuntimeExports.jsx("span", { className: "sr-only", children: props.download.value?.name ?? "" })] });
}
function Mime$1() {
  this._types = /* @__PURE__ */ Object.create(null), this._extensions = /* @__PURE__ */ Object.create(null);
  for (let i = 0; i < arguments.length; i++)
    this.define(arguments[i]);
  this.define = this.define.bind(this), this.getType = this.getType.bind(this), this.getExtension = this.getExtension.bind(this);
}
Mime$1.prototype.define = function(typeMap, force) {
  for (let type in typeMap) {
    let extensions = typeMap[type].map(function(t) {
      return t.toLowerCase();
    });
    type = type.toLowerCase();
    for (let i = 0; i < extensions.length; i++) {
      const ext = extensions[i];
      if ("*" !== ext[0]) {
        if (!force && ext in this._types)
          throw new Error('Attempt to change mapping for "' + ext + '" extension from "' + this._types[ext] + '" to "' + type + '". Pass `force=true` to allow this, otherwise remove "' + ext + '" from the list of extensions for "' + type + '".');
        this._types[ext] = type;
      }
    }
    if (force || !this._extensions[type]) {
      const ext = extensions[0];
      this._extensions[type] = "*" !== ext[0] ? ext : ext.substr(1);
    }
  }
}, Mime$1.prototype.getType = function(path) {
  let last = (path = String(path)).replace(/^.*[/\\]/, "").toLowerCase(), ext = last.replace(/^.*\./, "").toLowerCase(), hasPath = last.length < path.length;
  return (ext.length < last.length - 1 || !hasPath) && this._types[ext] || null;
}, Mime$1.prototype.getExtension = function(type) {
  return (type = /^\s*([^;\s]*)/.test(type) && RegExp.$1) && this._extensions[type.toLowerCase()] || null;
};
var mime = new Mime$1({ "application/andrew-inset": ["ez"], "application/applixware": ["aw"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cu-seeme": ["cu"], "application/dash+xml": ["mpd"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["es", "ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["js", "mjs"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4s", "m4p"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-signature": ["asc", "sig"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avif": ["avif"], "image/bmp": ["bmp"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["markdown", "md"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["mp4", "mp4v", "mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"] }, { "application/prs.cww": ["cww"], "application/vnd.1000minds.decision-model+xml": ["1km"], "application/vnd.3gpp.pic-bw-large": ["plb"], "application/vnd.3gpp.pic-bw-small": ["psb"], "application/vnd.3gpp.pic-bw-var": ["pvb"], "application/vnd.3gpp2.tcap": ["tcap"], "application/vnd.3m.post-it-notes": ["pwn"], "application/vnd.accpac.simply.aso": ["aso"], "application/vnd.accpac.simply.imp": ["imp"], "application/vnd.acucobol": ["acu"], "application/vnd.acucorp": ["atc", "acutc"], "application/vnd.adobe.air-application-installer-package+zip": ["air"], "application/vnd.adobe.formscentral.fcdt": ["fcdt"], "application/vnd.adobe.fxp": ["fxp", "fxpl"], "application/vnd.adobe.xdp+xml": ["xdp"], "application/vnd.adobe.xfdf": ["xfdf"], "application/vnd.ahead.space": ["ahead"], "application/vnd.airzip.filesecure.azf": ["azf"], "application/vnd.airzip.filesecure.azs": ["azs"], "application/vnd.amazon.ebook": ["azw"], "application/vnd.americandynamics.acc": ["acc"], "application/vnd.amiga.ami": ["ami"], "application/vnd.android.package-archive": ["apk"], "application/vnd.anser-web-certificate-issue-initiation": ["cii"], "application/vnd.anser-web-funds-transfer-initiation": ["fti"], "application/vnd.antix.game-component": ["atx"], "application/vnd.apple.installer+xml": ["mpkg"], "application/vnd.apple.keynote": ["key"], "application/vnd.apple.mpegurl": ["m3u8"], "application/vnd.apple.numbers": ["numbers"], "application/vnd.apple.pages": ["pages"], "application/vnd.apple.pkpass": ["pkpass"], "application/vnd.aristanetworks.swi": ["swi"], "application/vnd.astraea-software.iota": ["iota"], "application/vnd.audiograph": ["aep"], "application/vnd.balsamiq.bmml+xml": ["bmml"], "application/vnd.blueice.multipass": ["mpm"], "application/vnd.bmi": ["bmi"], "application/vnd.businessobjects": ["rep"], "application/vnd.chemdraw+xml": ["cdxml"], "application/vnd.chipnuts.karaoke-mmd": ["mmd"], "application/vnd.cinderella": ["cdy"], "application/vnd.citationstyles.style+xml": ["csl"], "application/vnd.claymore": ["cla"], "application/vnd.cloanto.rp9": ["rp9"], "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"], "application/vnd.cluetrust.cartomobile-config": ["c11amc"], "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"], "application/vnd.commonspace": ["csp"], "application/vnd.contact.cmsg": ["cdbcmsg"], "application/vnd.cosmocaller": ["cmc"], "application/vnd.crick.clicker": ["clkx"], "application/vnd.crick.clicker.keyboard": ["clkk"], "application/vnd.crick.clicker.palette": ["clkp"], "application/vnd.crick.clicker.template": ["clkt"], "application/vnd.crick.clicker.wordbank": ["clkw"], "application/vnd.criticaltools.wbs+xml": ["wbs"], "application/vnd.ctc-posml": ["pml"], "application/vnd.cups-ppd": ["ppd"], "application/vnd.curl.car": ["car"], "application/vnd.curl.pcurl": ["pcurl"], "application/vnd.dart": ["dart"], "application/vnd.data-vision.rdz": ["rdz"], "application/vnd.dbf": ["dbf"], "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"], "application/vnd.dece.ttml+xml": ["uvt", "uvvt"], "application/vnd.dece.unspecified": ["uvx", "uvvx"], "application/vnd.dece.zip": ["uvz", "uvvz"], "application/vnd.denovo.fcselayout-link": ["fe_launch"], "application/vnd.dna": ["dna"], "application/vnd.dolby.mlp": ["mlp"], "application/vnd.dpgraph": ["dpg"], "application/vnd.dreamfactory": ["dfac"], "application/vnd.ds-keypoint": ["kpxx"], "application/vnd.dvb.ait": ["ait"], "application/vnd.dvb.service": ["svc"], "application/vnd.dynageo": ["geo"], "application/vnd.ecowin.chart": ["mag"], "application/vnd.enliven": ["nml"], "application/vnd.epson.esf": ["esf"], "application/vnd.epson.msf": ["msf"], "application/vnd.epson.quickanime": ["qam"], "application/vnd.epson.salt": ["slt"], "application/vnd.epson.ssf": ["ssf"], "application/vnd.eszigno3+xml": ["es3", "et3"], "application/vnd.ezpix-album": ["ez2"], "application/vnd.ezpix-package": ["ez3"], "application/vnd.fdf": ["fdf"], "application/vnd.fdsn.mseed": ["mseed"], "application/vnd.fdsn.seed": ["seed", "dataless"], "application/vnd.flographit": ["gph"], "application/vnd.fluxtime.clip": ["ftc"], "application/vnd.framemaker": ["fm", "frame", "maker", "book"], "application/vnd.frogans.fnc": ["fnc"], "application/vnd.frogans.ltf": ["ltf"], "application/vnd.fsc.weblaunch": ["fsc"], "application/vnd.fujitsu.oasys": ["oas"], "application/vnd.fujitsu.oasys2": ["oa2"], "application/vnd.fujitsu.oasys3": ["oa3"], "application/vnd.fujitsu.oasysgp": ["fg5"], "application/vnd.fujitsu.oasysprs": ["bh2"], "application/vnd.fujixerox.ddd": ["ddd"], "application/vnd.fujixerox.docuworks": ["xdw"], "application/vnd.fujixerox.docuworks.binder": ["xbd"], "application/vnd.fuzzysheet": ["fzs"], "application/vnd.genomatix.tuxedo": ["txd"], "application/vnd.geogebra.file": ["ggb"], "application/vnd.geogebra.tool": ["ggt"], "application/vnd.geometry-explorer": ["gex", "gre"], "application/vnd.geonext": ["gxt"], "application/vnd.geoplan": ["g2w"], "application/vnd.geospace": ["g3w"], "application/vnd.gmx": ["gmx"], "application/vnd.google-apps.document": ["gdoc"], "application/vnd.google-apps.presentation": ["gslides"], "application/vnd.google-apps.spreadsheet": ["gsheet"], "application/vnd.google-earth.kml+xml": ["kml"], "application/vnd.google-earth.kmz": ["kmz"], "application/vnd.grafeq": ["gqf", "gqs"], "application/vnd.groove-account": ["gac"], "application/vnd.groove-help": ["ghf"], "application/vnd.groove-identity-message": ["gim"], "application/vnd.groove-injector": ["grv"], "application/vnd.groove-tool-message": ["gtm"], "application/vnd.groove-tool-template": ["tpl"], "application/vnd.groove-vcard": ["vcg"], "application/vnd.hal+xml": ["hal"], "application/vnd.handheld-entertainment+xml": ["zmm"], "application/vnd.hbci": ["hbci"], "application/vnd.hhe.lesson-player": ["les"], "application/vnd.hp-hpgl": ["hpgl"], "application/vnd.hp-hpid": ["hpid"], "application/vnd.hp-hps": ["hps"], "application/vnd.hp-jlyt": ["jlt"], "application/vnd.hp-pcl": ["pcl"], "application/vnd.hp-pclxl": ["pclxl"], "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"], "application/vnd.ibm.minipay": ["mpy"], "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"], "application/vnd.ibm.rights-management": ["irm"], "application/vnd.ibm.secure-container": ["sc"], "application/vnd.iccprofile": ["icc", "icm"], "application/vnd.igloader": ["igl"], "application/vnd.immervision-ivp": ["ivp"], "application/vnd.immervision-ivu": ["ivu"], "application/vnd.insors.igm": ["igm"], "application/vnd.intercon.formnet": ["xpw", "xpx"], "application/vnd.intergeo": ["i2g"], "application/vnd.intu.qbo": ["qbo"], "application/vnd.intu.qfx": ["qfx"], "application/vnd.ipunplugged.rcprofile": ["rcprofile"], "application/vnd.irepository.package+xml": ["irp"], "application/vnd.is-xpr": ["xpr"], "application/vnd.isac.fcs": ["fcs"], "application/vnd.jam": ["jam"], "application/vnd.jcp.javame.midlet-rms": ["rms"], "application/vnd.jisp": ["jisp"], "application/vnd.joost.joda-archive": ["joda"], "application/vnd.kahootz": ["ktz", "ktr"], "application/vnd.kde.karbon": ["karbon"], "application/vnd.kde.kchart": ["chrt"], "application/vnd.kde.kformula": ["kfo"], "application/vnd.kde.kivio": ["flw"], "application/vnd.kde.kontour": ["kon"], "application/vnd.kde.kpresenter": ["kpr", "kpt"], "application/vnd.kde.kspread": ["ksp"], "application/vnd.kde.kword": ["kwd", "kwt"], "application/vnd.kenameaapp": ["htke"], "application/vnd.kidspiration": ["kia"], "application/vnd.kinar": ["kne", "knp"], "application/vnd.koan": ["skp", "skd", "skt", "skm"], "application/vnd.kodak-descriptor": ["sse"], "application/vnd.las.las+xml": ["lasxml"], "application/vnd.llamagraphics.life-balance.desktop": ["lbd"], "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"], "application/vnd.lotus-1-2-3": ["123"], "application/vnd.lotus-approach": ["apr"], "application/vnd.lotus-freelance": ["pre"], "application/vnd.lotus-notes": ["nsf"], "application/vnd.lotus-organizer": ["org"], "application/vnd.lotus-screencam": ["scm"], "application/vnd.lotus-wordpro": ["lwp"], "application/vnd.macports.portpkg": ["portpkg"], "application/vnd.mapbox-vector-tile": ["mvt"], "application/vnd.mcd": ["mcd"], "application/vnd.medcalcdata": ["mc1"], "application/vnd.mediastation.cdkey": ["cdkey"], "application/vnd.mfer": ["mwf"], "application/vnd.mfmp": ["mfm"], "application/vnd.micrografx.flo": ["flo"], "application/vnd.micrografx.igx": ["igx"], "application/vnd.mif": ["mif"], "application/vnd.mobius.daf": ["daf"], "application/vnd.mobius.dis": ["dis"], "application/vnd.mobius.mbk": ["mbk"], "application/vnd.mobius.mqy": ["mqy"], "application/vnd.mobius.msl": ["msl"], "application/vnd.mobius.plc": ["plc"], "application/vnd.mobius.txf": ["txf"], "application/vnd.mophun.application": ["mpn"], "application/vnd.mophun.certificate": ["mpc"], "application/vnd.mozilla.xul+xml": ["xul"], "application/vnd.ms-artgalry": ["cil"], "application/vnd.ms-cab-compressed": ["cab"], "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"], "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"], "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"], "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"], "application/vnd.ms-excel.template.macroenabled.12": ["xltm"], "application/vnd.ms-fontobject": ["eot"], "application/vnd.ms-htmlhelp": ["chm"], "application/vnd.ms-ims": ["ims"], "application/vnd.ms-lrm": ["lrm"], "application/vnd.ms-officetheme": ["thmx"], "application/vnd.ms-outlook": ["msg"], "application/vnd.ms-pki.seccat": ["cat"], "application/vnd.ms-pki.stl": ["*stl"], "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"], "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"], "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"], "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"], "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"], "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"], "application/vnd.ms-project": ["mpp", "mpt"], "application/vnd.ms-word.document.macroenabled.12": ["docm"], "application/vnd.ms-word.template.macroenabled.12": ["dotm"], "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"], "application/vnd.ms-wpl": ["wpl"], "application/vnd.ms-xpsdocument": ["xps"], "application/vnd.mseq": ["mseq"], "application/vnd.musician": ["mus"], "application/vnd.muvee.style": ["msty"], "application/vnd.mynfc": ["taglet"], "application/vnd.neurolanguage.nlu": ["nlu"], "application/vnd.nitf": ["ntf", "nitf"], "application/vnd.noblenet-directory": ["nnd"], "application/vnd.noblenet-sealer": ["nns"], "application/vnd.noblenet-web": ["nnw"], "application/vnd.nokia.n-gage.ac+xml": ["*ac"], "application/vnd.nokia.n-gage.data": ["ngdat"], "application/vnd.nokia.n-gage.symbian.install": ["n-gage"], "application/vnd.nokia.radio-preset": ["rpst"], "application/vnd.nokia.radio-presets": ["rpss"], "application/vnd.novadigm.edm": ["edm"], "application/vnd.novadigm.edx": ["edx"], "application/vnd.novadigm.ext": ["ext"], "application/vnd.oasis.opendocument.chart": ["odc"], "application/vnd.oasis.opendocument.chart-template": ["otc"], "application/vnd.oasis.opendocument.database": ["odb"], "application/vnd.oasis.opendocument.formula": ["odf"], "application/vnd.oasis.opendocument.formula-template": ["odft"], "application/vnd.oasis.opendocument.graphics": ["odg"], "application/vnd.oasis.opendocument.graphics-template": ["otg"], "application/vnd.oasis.opendocument.image": ["odi"], "application/vnd.oasis.opendocument.image-template": ["oti"], "application/vnd.oasis.opendocument.presentation": ["odp"], "application/vnd.oasis.opendocument.presentation-template": ["otp"], "application/vnd.oasis.opendocument.spreadsheet": ["ods"], "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"], "application/vnd.oasis.opendocument.text": ["odt"], "application/vnd.oasis.opendocument.text-master": ["odm"], "application/vnd.oasis.opendocument.text-template": ["ott"], "application/vnd.oasis.opendocument.text-web": ["oth"], "application/vnd.olpc-sugar": ["xo"], "application/vnd.oma.dd2+xml": ["dd2"], "application/vnd.openblox.game+xml": ["obgx"], "application/vnd.openofficeorg.extension": ["oxt"], "application/vnd.openstreetmap.data+xml": ["osm"], "application/vnd.openxmlformats-officedocument.presentationml.presentation": ["pptx"], "application/vnd.openxmlformats-officedocument.presentationml.slide": ["sldx"], "application/vnd.openxmlformats-officedocument.presentationml.slideshow": ["ppsx"], "application/vnd.openxmlformats-officedocument.presentationml.template": ["potx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"], "application/vnd.openxmlformats-officedocument.spreadsheetml.template": ["xltx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"], "application/vnd.openxmlformats-officedocument.wordprocessingml.template": ["dotx"], "application/vnd.osgeo.mapguide.package": ["mgp"], "application/vnd.osgi.dp": ["dp"], "application/vnd.osgi.subsystem": ["esa"], "application/vnd.palm": ["pdb", "pqa", "oprc"], "application/vnd.pawaafile": ["paw"], "application/vnd.pg.format": ["str"], "application/vnd.pg.osasli": ["ei6"], "application/vnd.picsel": ["efif"], "application/vnd.pmi.widget": ["wg"], "application/vnd.pocketlearn": ["plf"], "application/vnd.powerbuilder6": ["pbd"], "application/vnd.previewsystems.box": ["box"], "application/vnd.proteus.magazine": ["mgz"], "application/vnd.publishare-delta-tree": ["qps"], "application/vnd.pvi.ptid1": ["ptid"], "application/vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"], "application/vnd.rar": ["rar"], "application/vnd.realvnc.bed": ["bed"], "application/vnd.recordare.musicxml": ["mxl"], "application/vnd.recordare.musicxml+xml": ["musicxml"], "application/vnd.rig.cryptonote": ["cryptonote"], "application/vnd.rim.cod": ["cod"], "application/vnd.rn-realmedia": ["rm"], "application/vnd.rn-realmedia-vbr": ["rmvb"], "application/vnd.route66.link66+xml": ["link66"], "application/vnd.sailingtracker.track": ["st"], "application/vnd.seemail": ["see"], "application/vnd.sema": ["sema"], "application/vnd.semd": ["semd"], "application/vnd.semf": ["semf"], "application/vnd.shana.informed.formdata": ["ifm"], "application/vnd.shana.informed.formtemplate": ["itp"], "application/vnd.shana.informed.interchange": ["iif"], "application/vnd.shana.informed.package": ["ipk"], "application/vnd.simtech-mindmapper": ["twd", "twds"], "application/vnd.smaf": ["mmf"], "application/vnd.smart.teacher": ["teacher"], "application/vnd.software602.filler.form+xml": ["fo"], "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"], "application/vnd.spotfire.dxp": ["dxp"], "application/vnd.spotfire.sfs": ["sfs"], "application/vnd.stardivision.calc": ["sdc"], "application/vnd.stardivision.draw": ["sda"], "application/vnd.stardivision.impress": ["sdd"], "application/vnd.stardivision.math": ["smf"], "application/vnd.stardivision.writer": ["sdw", "vor"], "application/vnd.stardivision.writer-global": ["sgl"], "application/vnd.stepmania.package": ["smzip"], "application/vnd.stepmania.stepchart": ["sm"], "application/vnd.sun.wadl+xml": ["wadl"], "application/vnd.sun.xml.calc": ["sxc"], "application/vnd.sun.xml.calc.template": ["stc"], "application/vnd.sun.xml.draw": ["sxd"], "application/vnd.sun.xml.draw.template": ["std"], "application/vnd.sun.xml.impress": ["sxi"], "application/vnd.sun.xml.impress.template": ["sti"], "application/vnd.sun.xml.math": ["sxm"], "application/vnd.sun.xml.writer": ["sxw"], "application/vnd.sun.xml.writer.global": ["sxg"], "application/vnd.sun.xml.writer.template": ["stw"], "application/vnd.sus-calendar": ["sus", "susp"], "application/vnd.svd": ["svd"], "application/vnd.symbian.install": ["sis", "sisx"], "application/vnd.syncml+xml": ["xsm"], "application/vnd.syncml.dm+wbxml": ["bdm"], "application/vnd.syncml.dm+xml": ["xdm"], "application/vnd.syncml.dmddf+xml": ["ddf"], "application/vnd.tao.intent-module-archive": ["tao"], "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"], "application/vnd.tmobile-livetv": ["tmo"], "application/vnd.trid.tpt": ["tpt"], "application/vnd.triscape.mxs": ["mxs"], "application/vnd.trueapp": ["tra"], "application/vnd.ufdl": ["ufd", "ufdl"], "application/vnd.uiq.theme": ["utz"], "application/vnd.umajin": ["umj"], "application/vnd.unity": ["unityweb"], "application/vnd.uoml+xml": ["uoml"], "application/vnd.vcx": ["vcx"], "application/vnd.visio": ["vsd", "vst", "vss", "vsw"], "application/vnd.visionary": ["vis"], "application/vnd.vsf": ["vsf"], "application/vnd.wap.wbxml": ["wbxml"], "application/vnd.wap.wmlc": ["wmlc"], "application/vnd.wap.wmlscriptc": ["wmlsc"], "application/vnd.webturbo": ["wtb"], "application/vnd.wolfram.player": ["nbp"], "application/vnd.wordperfect": ["wpd"], "application/vnd.wqd": ["wqd"], "application/vnd.wt.stf": ["stf"], "application/vnd.xara": ["xar"], "application/vnd.xfdl": ["xfdl"], "application/vnd.yamaha.hv-dic": ["hvd"], "application/vnd.yamaha.hv-script": ["hvs"], "application/vnd.yamaha.hv-voice": ["hvp"], "application/vnd.yamaha.openscoreformat": ["osf"], "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"], "application/vnd.yamaha.smaf-audio": ["saf"], "application/vnd.yamaha.smaf-phrase": ["spf"], "application/vnd.yellowriver-custom-menu": ["cmp"], "application/vnd.zul": ["zir", "zirz"], "application/vnd.zzazz.deck+xml": ["zaz"], "application/x-7z-compressed": ["7z"], "application/x-abiword": ["abw"], "application/x-ace-compressed": ["ace"], "application/x-apple-diskimage": ["*dmg"], "application/x-arj": ["arj"], "application/x-authorware-bin": ["aab", "x32", "u32", "vox"], "application/x-authorware-map": ["aam"], "application/x-authorware-seg": ["aas"], "application/x-bcpio": ["bcpio"], "application/x-bdoc": ["*bdoc"], "application/x-bittorrent": ["torrent"], "application/x-blorb": ["blb", "blorb"], "application/x-bzip": ["bz"], "application/x-bzip2": ["bz2", "boz"], "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"], "application/x-cdlink": ["vcd"], "application/x-cfs-compressed": ["cfs"], "application/x-chat": ["chat"], "application/x-chess-pgn": ["pgn"], "application/x-chrome-extension": ["crx"], "application/x-cocoa": ["cco"], "application/x-conference": ["nsc"], "application/x-cpio": ["cpio"], "application/x-csh": ["csh"], "application/x-debian-package": ["*deb", "udeb"], "application/x-dgc-compressed": ["dgc"], "application/x-director": ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"], "application/x-doom": ["wad"], "application/x-dtbncx+xml": ["ncx"], "application/x-dtbook+xml": ["dtb"], "application/x-dtbresource+xml": ["res"], "application/x-dvi": ["dvi"], "application/x-envoy": ["evy"], "application/x-eva": ["eva"], "application/x-font-bdf": ["bdf"], "application/x-font-ghostscript": ["gsf"], "application/x-font-linux-psf": ["psf"], "application/x-font-pcf": ["pcf"], "application/x-font-snf": ["snf"], "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"], "application/x-freearc": ["arc"], "application/x-futuresplash": ["spl"], "application/x-gca-compressed": ["gca"], "application/x-glulx": ["ulx"], "application/x-gnumeric": ["gnumeric"], "application/x-gramps-xml": ["gramps"], "application/x-gtar": ["gtar"], "application/x-hdf": ["hdf"], "application/x-httpd-php": ["php"], "application/x-install-instructions": ["install"], "application/x-iso9660-image": ["*iso"], "application/x-iwork-keynote-sffkey": ["*key"], "application/x-iwork-numbers-sffnumbers": ["*numbers"], "application/x-iwork-pages-sffpages": ["*pages"], "application/x-java-archive-diff": ["jardiff"], "application/x-java-jnlp-file": ["jnlp"], "application/x-keepass2": ["kdbx"], "application/x-latex": ["latex"], "application/x-lua-bytecode": ["luac"], "application/x-lzh-compressed": ["lzh", "lha"], "application/x-makeself": ["run"], "application/x-mie": ["mie"], "application/x-mobipocket-ebook": ["prc", "mobi"], "application/x-ms-application": ["application"], "application/x-ms-shortcut": ["lnk"], "application/x-ms-wmd": ["wmd"], "application/x-ms-wmz": ["wmz"], "application/x-ms-xbap": ["xbap"], "application/x-msaccess": ["mdb"], "application/x-msbinder": ["obd"], "application/x-mscardfile": ["crd"], "application/x-msclip": ["clp"], "application/x-msdos-program": ["*exe"], "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"], "application/x-msmediaview": ["mvb", "m13", "m14"], "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"], "application/x-msmoney": ["mny"], "application/x-mspublisher": ["pub"], "application/x-msschedule": ["scd"], "application/x-msterminal": ["trm"], "application/x-mswrite": ["wri"], "application/x-netcdf": ["nc", "cdf"], "application/x-ns-proxy-autoconfig": ["pac"], "application/x-nzb": ["nzb"], "application/x-perl": ["pl", "pm"], "application/x-pilot": ["*prc", "*pdb"], "application/x-pkcs12": ["p12", "pfx"], "application/x-pkcs7-certificates": ["p7b", "spc"], "application/x-pkcs7-certreqresp": ["p7r"], "application/x-rar-compressed": ["*rar"], "application/x-redhat-package-manager": ["rpm"], "application/x-research-info-systems": ["ris"], "application/x-sea": ["sea"], "application/x-sh": ["sh"], "application/x-shar": ["shar"], "application/x-shockwave-flash": ["swf"], "application/x-silverlight-app": ["xap"], "application/x-sql": ["sql"], "application/x-stuffit": ["sit"], "application/x-stuffitx": ["sitx"], "application/x-subrip": ["srt"], "application/x-sv4cpio": ["sv4cpio"], "application/x-sv4crc": ["sv4crc"], "application/x-t3vm-image": ["t3"], "application/x-tads": ["gam"], "application/x-tar": ["tar"], "application/x-tcl": ["tcl", "tk"], "application/x-tex": ["tex"], "application/x-tex-tfm": ["tfm"], "application/x-texinfo": ["texinfo", "texi"], "application/x-tgif": ["*obj"], "application/x-ustar": ["ustar"], "application/x-virtualbox-hdd": ["hdd"], "application/x-virtualbox-ova": ["ova"], "application/x-virtualbox-ovf": ["ovf"], "application/x-virtualbox-vbox": ["vbox"], "application/x-virtualbox-vbox-extpack": ["vbox-extpack"], "application/x-virtualbox-vdi": ["vdi"], "application/x-virtualbox-vhd": ["vhd"], "application/x-virtualbox-vmdk": ["vmdk"], "application/x-wais-source": ["src"], "application/x-web-app-manifest+json": ["webapp"], "application/x-x509-ca-cert": ["der", "crt", "pem"], "application/x-xfig": ["fig"], "application/x-xliff+xml": ["*xlf"], "application/x-xpinstall": ["xpi"], "application/x-xz": ["xz"], "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"], "audio/vnd.dece.audio": ["uva", "uvva"], "audio/vnd.digital-winds": ["eol"], "audio/vnd.dra": ["dra"], "audio/vnd.dts": ["dts"], "audio/vnd.dts.hd": ["dtshd"], "audio/vnd.lucent.voice": ["lvp"], "audio/vnd.ms-playready.media.pya": ["pya"], "audio/vnd.nuera.ecelp4800": ["ecelp4800"], "audio/vnd.nuera.ecelp7470": ["ecelp7470"], "audio/vnd.nuera.ecelp9600": ["ecelp9600"], "audio/vnd.rip": ["rip"], "audio/x-aac": ["aac"], "audio/x-aiff": ["aif", "aiff", "aifc"], "audio/x-caf": ["caf"], "audio/x-flac": ["flac"], "audio/x-m4a": ["*m4a"], "audio/x-matroska": ["mka"], "audio/x-mpegurl": ["m3u"], "audio/x-ms-wax": ["wax"], "audio/x-ms-wma": ["wma"], "audio/x-pn-realaudio": ["ram", "ra"], "audio/x-pn-realaudio-plugin": ["rmp"], "audio/x-realaudio": ["*ra"], "audio/x-wav": ["*wav"], "chemical/x-cdx": ["cdx"], "chemical/x-cif": ["cif"], "chemical/x-cmdf": ["cmdf"], "chemical/x-cml": ["cml"], "chemical/x-csml": ["csml"], "chemical/x-xyz": ["xyz"], "image/prs.btif": ["btif"], "image/prs.pti": ["pti"], "image/vnd.adobe.photoshop": ["psd"], "image/vnd.airzip.accelerator.azv": ["azv"], "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"], "image/vnd.djvu": ["djvu", "djv"], "image/vnd.dvb.subtitle": ["*sub"], "image/vnd.dwg": ["dwg"], "image/vnd.dxf": ["dxf"], "image/vnd.fastbidsheet": ["fbs"], "image/vnd.fpx": ["fpx"], "image/vnd.fst": ["fst"], "image/vnd.fujixerox.edmics-mmr": ["mmr"], "image/vnd.fujixerox.edmics-rlc": ["rlc"], "image/vnd.microsoft.icon": ["ico"], "image/vnd.ms-dds": ["dds"], "image/vnd.ms-modi": ["mdi"], "image/vnd.ms-photo": ["wdp"], "image/vnd.net-fpx": ["npx"], "image/vnd.pco.b16": ["b16"], "image/vnd.tencent.tap": ["tap"], "image/vnd.valve.source.texture": ["vtf"], "image/vnd.wap.wbmp": ["wbmp"], "image/vnd.xiff": ["xif"], "image/vnd.zbrush.pcx": ["pcx"], "image/x-3ds": ["3ds"], "image/x-cmu-raster": ["ras"], "image/x-cmx": ["cmx"], "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"], "image/x-icon": ["*ico"], "image/x-jng": ["jng"], "image/x-mrsid-image": ["sid"], "image/x-ms-bmp": ["*bmp"], "image/x-pcx": ["*pcx"], "image/x-pict": ["pic", "pct"], "image/x-portable-anymap": ["pnm"], "image/x-portable-bitmap": ["pbm"], "image/x-portable-graymap": ["pgm"], "image/x-portable-pixmap": ["ppm"], "image/x-rgb": ["rgb"], "image/x-tga": ["tga"], "image/x-xbitmap": ["xbm"], "image/x-xpixmap": ["xpm"], "image/x-xwindowdump": ["xwd"], "message/vnd.wfa.wsc": ["wsc"], "model/vnd.collada+xml": ["dae"], "model/vnd.dwf": ["dwf"], "model/vnd.gdl": ["gdl"], "model/vnd.gtw": ["gtw"], "model/vnd.mts": ["mts"], "model/vnd.opengex": ["ogex"], "model/vnd.parasolid.transmit.binary": ["x_b"], "model/vnd.parasolid.transmit.text": ["x_t"], "model/vnd.sap.vds": ["vds"], "model/vnd.usdz+zip": ["usdz"], "model/vnd.valve.source.compiled-map": ["bsp"], "model/vnd.vtu": ["vtu"], "text/prs.lines.tag": ["dsc"], "text/vnd.curl": ["curl"], "text/vnd.curl.dcurl": ["dcurl"], "text/vnd.curl.mcurl": ["mcurl"], "text/vnd.curl.scurl": ["scurl"], "text/vnd.dvb.subtitle": ["sub"], "text/vnd.fly": ["fly"], "text/vnd.fmi.flexstor": ["flx"], "text/vnd.graphviz": ["gv"], "text/vnd.in3d.3dml": ["3dml"], "text/vnd.in3d.spot": ["spot"], "text/vnd.sun.j2me.app-descriptor": ["jad"], "text/vnd.wap.wml": ["wml"], "text/vnd.wap.wmlscript": ["wmls"], "text/x-asm": ["s", "asm"], "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"], "text/x-component": ["htc"], "text/x-fortran": ["f", "for", "f77", "f90"], "text/x-handlebars-template": ["hbs"], "text/x-java-source": ["java"], "text/x-lua": ["lua"], "text/x-markdown": ["mkd"], "text/x-nfo": ["nfo"], "text/x-opml": ["opml"], "text/x-org": ["*org"], "text/x-pascal": ["p", "pas"], "text/x-processing": ["pde"], "text/x-sass": ["sass"], "text/x-scss": ["scss"], "text/x-setext": ["etx"], "text/x-sfv": ["sfv"], "text/x-suse-ymp": ["ymp"], "text/x-uuencode": ["uu"], "text/x-vcalendar": ["vcs"], "text/x-vcard": ["vcf"], "video/vnd.dece.hd": ["uvh", "uvvh"], "video/vnd.dece.mobile": ["uvm", "uvvm"], "video/vnd.dece.pd": ["uvp", "uvvp"], "video/vnd.dece.sd": ["uvs", "uvvs"], "video/vnd.dece.video": ["uvv", "uvvv"], "video/vnd.dvb.file": ["dvb"], "video/vnd.fvt": ["fvt"], "video/vnd.mpegurl": ["mxu", "m4u"], "video/vnd.ms-playready.media.pyv": ["pyv"], "video/vnd.uvvu.mp4": ["uvu", "uvvu"], "video/vnd.vivo": ["viv"], "video/x-f4v": ["f4v"], "video/x-fli": ["fli"], "video/x-flv": ["flv"], "video/x-m4v": ["m4v"], "video/x-matroska": ["mkv", "mk3d", "mks"], "video/x-mng": ["mng"], "video/x-ms-asf": ["asf", "asx"], "video/x-ms-vob": ["vob"], "video/x-ms-wm": ["wm"], "video/x-ms-wmv": ["wmv"], "video/x-ms-wmx": ["wmx"], "video/x-ms-wvx": ["wvx"], "video/x-msvideo": ["avi"], "video/x-sgi-movie": ["movie"], "video/x-smv": ["smv"], "x-conference/x-cooltalk": ["ice"] });
function FileUploader(props) {
  const fileInputRef = reactExports.useRef(null), uploadButtonRef = reactExports.useRef(null), accept = function(extensions) {
    if (!("cordova" in window) && !function() {
      const userAgent = window.navigator.userAgent, iOS = /iP(ad|hone)/i.test(userAgent), webKit = /WebKit/i.test(userAgent);
      return iOS && webKit && !/(CriOS|FxiOS|OPiOS|mercury)/i.test(userAgent);
    }())
      return extensions;
    const mimeTypes = /* @__PURE__ */ new Set();
    for (const extension of extensions.split(",")) {
      const mimeType = mime.getType(extension);
      if (!mimeType)
        return "*/*";
      mimeTypes.add(mimeType);
    }
    if (!mimeTypes.size)
      return "*/*";
    return Array.from(mimeTypes).join("cordova" in window ? ";" : ",");
  }(props.extensions);
  return reactExports.useEffect(() => props.upload.setValidator((file) => function(file2, allowedExtensions, maxFileSize) {
    if (file2) {
      const extension = ensure(file2.name.toLowerCase().split(".").pop());
      if (allowedExtensions) {
        if (void 0 === allowedExtensions.split(",").find((element) => element.trim() === `.${extension.trim()}`))
          return translate("mxui.widget.FileInput", "incorrect_extension", allowedExtensions);
      }
      const fileSize = Number(file2.size) / 1048576;
      if (fileSize > maxFileSize)
        return translate("mxui.widget.FileInput", "file_too_large", fileSize.toFixed(2), maxFileSize.toString());
    }
    return;
  }(file, props.extensions, props.maxFileSize)), []), jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [jsxRuntimeExports.jsx("form", { className: "sr-only", encType: "multipart/form-data", method: "POST", onSubmit: () => false, children: jsxRuntimeExports.jsx("input", { type: "file", disabled: props.upload.readOnly, tabIndex: -1, ...accept && "*/*" !== accept ? { accept } : {}, ref: fileInputRef, onChange: (e) => {
    const file = ensure(e.target).files?.[0];
    props.upload.setValue(file);
  } }) }), jsxRuntimeExports.jsx("input", { type: "text", className: "form-control", readOnly: true, value: props.upload.value ? props.upload.value.name : translate("mxui.widget.FileInput", "no_file_selected"), "aria-labelledby": `${props.id}-label`, onClick: () => ensure(uploadButtonRef.current).focus() }), jsxRuntimeExports.jsx("button", { type: "button", disabled: props.upload.readOnly, className: "btn mx-button mx-fileinput-upload-button", id: `${props.id}-upload`, "aria-labelledby": `${props.id}-label ${props.id}-upload`, ref: uploadButtonRef, onClick: () => {
    fileInputRef.current && (fileInputRef.current.value = ""), ensure(fileInputRef.current).click();
  }, onKeyUp: (e) => {
    "Delete" !== e.key && "Backspace" !== e.key || (props.upload.setValue(void 0), e.stopPropagation());
  }, children: translate("mxui.widget.FileInput", "upload") })] });
}
function FileManager({ class: className, style, tabIndex, ...rest }) {
  return jsxRuntimeExports.jsxs("div", { className: classNames("mx-compound-control", className), "data-focusindex": tabIndex ?? 0, style, children: ["upload" in rest ? jsxRuntimeExports.jsx(FileUploader, { ...rest }) : null, "download" in rest ? jsxRuntimeExports.jsx(FileDownloader, { ...rest }) : null, "upload" in rest ? jsxRuntimeExports.jsx(Alert, { id: `${rest.id}-error`, validation: rest.upload.validation }) : null] });
}

function getCollapseAttributes(bodyId, collapsed, setCollapsed) {
  return { role: "button", tabIndex: 0, "aria-expanded": !collapsed, onClick: () => setCollapsed(!collapsed), onKeyDown: (e) => {
    "Enter" !== e.key && " " !== e.key || setCollapsed(!collapsed);
  }, "aria-controls": bodyId };
}
const GroupBox = (props) => {
  const HeaderElement = props.renderMode, bodyId = `${props.id}_body`, headerId = `${props.id}_header`, collapsible = "no" !== props.collapsible, [collapsed, setCollapsed] = usePersistentState("collapsed", "yes" === props.collapsible);
  return jsxRuntimeExports.jsxs("div", { className: classNames("mx-groupbox", { "mx-groupbox-collapsible": collapsible, collapsed }, props.class), "data-focusindex": props.tabIndex ?? 0, style: props.style, children: [props.header && jsxRuntimeExports.jsxs(HeaderElement, { id: headerId, className: "mx-groupbox-header", ...collapsible ? getCollapseAttributes(bodyId, collapsed, setCollapsed) : {}, children: [collapsible && jsxRuntimeExports.jsx("i", { className: classNames("mx-icon-filled mx-groupbox-collapse-icon", { "mx-icon-substract": !collapsed, "mx-icon-add": collapsed }) }), jsxRuntimeExports.jsx(InlineText, { caption: props.header })] }), jsxRuntimeExports.jsx("div", { id: bodyId, className: "mx-groupbox-body", role: "region", "aria-labelledby": headerId, ...props.header && collapsible ? { "data-focusindex": "0" } : void 0, children: props.content })] });
};

const React = { createElement: reactExports.createElement };
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const { $DataView, $FormGroup, $TextBox, $ConditionalVisibilityWrapper, $Combobox, $TextArea, $DatePicker, $Container, $Text, $Div, $ActionButton, $Image, $GroupBox, $ListView, $FileManager } = asPluginWidgets({ DataView, FormGroup, TextBox, ConditionalVisibilityWrapper, Combobox, TextArea, DatePicker, Container, Text, Div, ActionButton, Image, GroupBox, ListView, FileManager });
addEnumerations({
  "TaskTracker.ENUM_Priority": [
    [
      "High",
      selectTranslation([
        "High"
      ])
    ],
    [
      "Medium",
      selectTranslation([
        "Medium"
      ])
    ],
    [
      "Low",
      selectTranslation([
        "Low"
      ])
    ]
  ],
  "TaskTracker.ENUM_Status": [
    [
      "To_Do",
      selectTranslation([
        "To Do"
      ])
    ],
    [
      "Running",
      selectTranslation([
        "Running"
      ])
    ],
    [
      "Review",
      selectTranslation([
        "Review"
      ])
    ],
    [
      "Done",
      selectTranslation([
        "Done"
      ])
    ]
  ]
});
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $DataView,
    {
      key: "p.TaskTracker.TaskEdit.dataView1",
      $widgetId: "p.TaskTracker.TaskEdit.dataView1",
      class: "mx-name-dataView1 form-vertical",
      style: void 0,
      tabIndex: void 0,
      object: AssociationObjectProperty({
        "dataSourceId": "p.24",
        "scope": "$Task",
        "editable": true
      }),
      emptyMessage: TextProperty({
        "value": selectTranslation([
          ""
        ])
      }),
      body: [
        /* @__PURE__ */ React.createElement(
          $FormGroup,
          {
            key: "p.TaskTracker.TaskEdit.textBox1$formGroup",
            $widgetId: "p.TaskTracker.TaskEdit.textBox1$formGroup",
            class: "mx-name-textBox1 mx-textbox",
            style: void 0,
            control: [
              /* @__PURE__ */ React.createElement(
                $TextBox,
                {
                  key: "p.TaskTracker.TaskEdit.textBox1",
                  $widgetId: "p.TaskTracker.TaskEdit.textBox1",
                  inputValue: AttributeProperty({
                    "scope": "p.TaskTracker.TaskEdit.dataView1",
                    "path": "",
                    "entity": "TaskTracker.Task",
                    "attribute": "Title",
                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                    "isList": false,
                    "validation": null,
                    "formatting": {}
                  }),
                  isPassword: false,
                  placeholder: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Task title..." }, "args": {} }
                    })
                  ]),
                  mask: "",
                  readOnlyStyle: "control",
                  maxLength: 200,
                  onEnter: void 0,
                  onLeave: ActionProperty({
                    "action": { "type": "callMicroflow", "argMap": { "Task": { "widget": "$Task", "source": "object" } }, "config": { "operationId": "Ue/NU8W7cVG98NT4kSB5kw", "validate": "view", "allowedRoles": ["Manager", "Member"] }, "disabledDuringExecution": false }
                  }),
                  onEnterKeyPress: void 0,
                  ariaLabel: void 0,
                  autocomplete: "on",
                  submitWhileEditing: false,
                  submitDelay: 300,
                  ariaRequired: void 0,
                  tabIndex: void 0,
                  id: DerivedUniqueIdProperty({
                    "widgetId": "p.TaskTracker.TaskEdit.textBox1"
                  })
                }
              )
            ],
            caption: selectTranslation([
              ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "Title" }, "args": {} }
              })
            ]),
            labelFor: DerivedUniqueIdProperty({
              "widgetId": "p.TaskTracker.TaskEdit.textBox1"
            }),
            width: void 0,
            orientation: "vertical",
            hasError: ValidationProperty({
              "inputWidgetId": "p.TaskTracker.TaskEdit.textBox1"
            })
          }
        ),
        /* @__PURE__ */ React.createElement(
          $ConditionalVisibilityWrapper,
          {
            key: "p.TaskTracker.TaskEdit.comboBox1$formGroup$visibility",
            $widgetId: "p.TaskTracker.TaskEdit.comboBox1$formGroup$visibility",
            visible: ExpressionProperty({
              "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Manager" }, { "type": "literal", "value": "Member" }] }, "args": {} }
            }),
            contents: [
              /* @__PURE__ */ React.createElement(
                $FormGroup,
                {
                  key: "p.TaskTracker.TaskEdit.comboBox1$formGroup",
                  $widgetId: "p.TaskTracker.TaskEdit.comboBox1$formGroup",
                  class: "mx-name-comboBox1",
                  style: void 0,
                  control: [
                    /* @__PURE__ */ React.createElement(
                      $Combobox,
                      {
                        key: "p.TaskTracker.TaskEdit.comboBox1",
                        $widgetId: "p.TaskTracker.TaskEdit.comboBox1",
                        source: "context",
                        optionsSourceType: "association",
                        optionsSourceDatabaseDataSource: void 0,
                        optionsSourceAssociationCaptionType: "attribute",
                        optionsSourceDatabaseCaptionType: "attribute",
                        optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                          "path": "",
                          "entity": "TaskTracker.Department",
                          "attribute": "Name",
                          "attributeType": "String",
                          "sortable": true,
                          "filterable": true,
                          "dataSourceId": "p.0",
                          "isList": false
                        }),
                        optionsSourceAssociationCaptionExpression: void 0,
                        attributeAssociation: AssociationProperty({
                          "type": "Reference",
                          "entity": "TaskTracker.Task",
                          "path": "",
                          "attribute": "TaskTracker.Task_Department",
                          "endpointEntity": "TaskTracker.Department",
                          "selectableObjectsId": "p.0",
                          "scope": "p.TaskTracker.TaskEdit.dataView1",
                          "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                        }),
                        optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                          "dataSourceId": "p.0",
                          "entity": "TaskTracker.Department",
                          "scope": "p.TaskTracker.TaskEdit.dataView1",
                          "operationId": "pn/E9ypVtl6bmnXBIVAXuQ",
                          "sort": []
                        }),
                        optionsSourceStaticDataSource: [],
                        emptyOptionText: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                          })
                        ]),
                        noOptionsText: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                          })
                        ]),
                        clearable: true,
                        optionsSourceAssociationCustomContentType: "no",
                        optionsSourceAssociationCustomContent: void 0,
                        optionsSourceDatabaseCustomContentType: "no",
                        staticDataSourceCustomContentType: "no",
                        showFooter: false,
                        menuFooterContent: void 0,
                        selectionMethod: "checkbox",
                        selectedItemsStyle: "text",
                        selectAllButton: false,
                        selectAllButtonCaption: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                          })
                        ]),
                        readOnlyStyle: "text",
                        onChangeEvent: void 0,
                        onEnterEvent: void 0,
                        onLeaveEvent: void 0,
                        ariaRequired: ExpressionProperty({
                          "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                        }),
                        clearButtonAriaLabel: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                          })
                        ]),
                        removeValueAriaLabel: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                          })
                        ]),
                        a11ySelectedValue: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                          })
                        ]),
                        a11yOptionsAvailable: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                          })
                        ]),
                        a11yInstructions: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                          })
                        ]),
                        lazyLoading: true,
                        loadingType: "spinner",
                        selectedItemsSorting: "none",
                        filterType: "contains",
                        tabIndex: void 0,
                        id: DerivedUniqueIdProperty({
                          "widgetId": "p.TaskTracker.TaskEdit.comboBox1"
                        })
                      }
                    )
                  ],
                  caption: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Department" }, "args": {} }
                    })
                  ]),
                  labelFor: DerivedUniqueIdProperty({
                    "widgetId": "p.TaskTracker.TaskEdit.comboBox1"
                  }),
                  width: void 0,
                  orientation: "vertical",
                  hasError: ValidationProperty({
                    "inputWidgetId": "p.TaskTracker.TaskEdit.comboBox1"
                  })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ React.createElement(
          $FormGroup,
          {
            key: "p.TaskTracker.TaskEdit.textArea1$formGroup",
            $widgetId: "p.TaskTracker.TaskEdit.textArea1$formGroup",
            class: "mx-name-textArea1 mx-textarea",
            style: void 0,
            control: [
              /* @__PURE__ */ React.createElement(
                $TextArea,
                {
                  key: "p.TaskTracker.TaskEdit.textArea1",
                  $widgetId: "p.TaskTracker.TaskEdit.textArea1",
                  inputValue: AttributeProperty({
                    "scope": "p.TaskTracker.TaskEdit.dataView1",
                    "path": "",
                    "entity": "TaskTracker.Task",
                    "attribute": "Description",
                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                    "isList": false,
                    "validation": null
                  }),
                  counterMessage: void 0,
                  maxLength: void 0,
                  numberOfLines: 5,
                  autoGrow: false,
                  placeholder: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Task description..." }, "args": {} }
                    })
                  ]),
                  readOnlyStyle: "control",
                  textTooLongMessage: void 0,
                  onEnter: void 0,
                  onLeave: void 0,
                  ariaLabel: void 0,
                  ariaRequired: void 0,
                  submitWhileEditing: false,
                  submitDelay: 300,
                  tabIndex: void 0,
                  id: DerivedUniqueIdProperty({
                    "widgetId": "p.TaskTracker.TaskEdit.textArea1"
                  })
                }
              )
            ],
            caption: selectTranslation([
              ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "Description" }, "args": {} }
              })
            ]),
            labelFor: DerivedUniqueIdProperty({
              "widgetId": "p.TaskTracker.TaskEdit.textArea1"
            }),
            width: void 0,
            orientation: "vertical",
            hasError: ValidationProperty({
              "inputWidgetId": "p.TaskTracker.TaskEdit.textArea1"
            })
          }
        ),
        /* @__PURE__ */ React.createElement(
          $FormGroup,
          {
            key: "p.TaskTracker.TaskEdit.datePicker1$formGroup",
            $widgetId: "p.TaskTracker.TaskEdit.datePicker1$formGroup",
            class: "mx-name-datePicker1 mx-datepicker",
            style: void 0,
            control: [
              /* @__PURE__ */ React.createElement(
                $DatePicker,
                {
                  key: "p.TaskTracker.TaskEdit.datePicker1",
                  $widgetId: "p.TaskTracker.TaskEdit.datePicker1",
                  mode: "date",
                  showCalendarButton: true,
                  inputValue: AttributeProperty({
                    "scope": "p.TaskTracker.TaskEdit.dataView1",
                    "path": "",
                    "entity": "TaskTracker.Task",
                    "attribute": "DueDate",
                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                    "isList": false,
                    "validation": null,
                    "formatting": {
                      "dateFormat": selectTranslation([
                        {
                          "type": "date"
                        }
                      ])
                    }
                  }),
                  placeholder: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                    })
                  ]),
                  buttonLabel: TextProperty({
                    "value": selectTranslation([
                      "Show date picker"
                    ])
                  }),
                  readOnlyStyle: "control",
                  onEnter: void 0,
                  onLeave: void 0,
                  ariaLabel: void 0,
                  ariaRequired: void 0,
                  tabIndex: void 0,
                  id: DerivedUniqueIdProperty({
                    "widgetId": "p.TaskTracker.TaskEdit.datePicker1"
                  })
                }
              )
            ],
            caption: selectTranslation([
              ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "Due date" }, "args": {} }
              })
            ]),
            labelFor: DerivedUniqueIdProperty({
              "widgetId": "p.TaskTracker.TaskEdit.datePicker1"
            }),
            width: void 0,
            orientation: "vertical",
            hasError: ValidationProperty({
              "inputWidgetId": "p.TaskTracker.TaskEdit.datePicker1"
            })
          }
        ),
        /* @__PURE__ */ React.createElement(
          $FormGroup,
          {
            key: "p.TaskTracker.TaskEdit.datePicker2$formGroup",
            $widgetId: "p.TaskTracker.TaskEdit.datePicker2$formGroup",
            class: "mx-name-datePicker2 mx-datepicker",
            style: void 0,
            control: [
              /* @__PURE__ */ React.createElement(
                $DatePicker,
                {
                  key: "p.TaskTracker.TaskEdit.datePicker2",
                  $widgetId: "p.TaskTracker.TaskEdit.datePicker2",
                  mode: "date",
                  showCalendarButton: true,
                  inputValue: AttributeProperty({
                    "scope": "p.TaskTracker.TaskEdit.dataView1",
                    "path": "",
                    "entity": "TaskTracker.Task",
                    "attribute": "CompletionDate",
                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                    "isList": false,
                    "validation": null,
                    "formatting": {
                      "dateFormat": selectTranslation([
                        {
                          "type": "date"
                        }
                      ])
                    }
                  }),
                  placeholder: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                    })
                  ]),
                  buttonLabel: TextProperty({
                    "value": selectTranslation([
                      "Show date picker"
                    ])
                  }),
                  readOnlyStyle: "control",
                  onEnter: void 0,
                  onLeave: void 0,
                  ariaLabel: void 0,
                  ariaRequired: void 0,
                  tabIndex: void 0,
                  id: DerivedUniqueIdProperty({
                    "widgetId": "p.TaskTracker.TaskEdit.datePicker2"
                  })
                }
              )
            ],
            caption: selectTranslation([
              ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "Completion date" }, "args": {} }
              })
            ]),
            labelFor: DerivedUniqueIdProperty({
              "widgetId": "p.TaskTracker.TaskEdit.datePicker2"
            }),
            width: void 0,
            orientation: "vertical",
            hasError: ValidationProperty({
              "inputWidgetId": "p.TaskTracker.TaskEdit.datePicker2"
            })
          }
        ),
        /* @__PURE__ */ React.createElement(
          $Container,
          {
            key: "p.TaskTracker.TaskEdit.container47",
            $widgetId: "p.TaskTracker.TaskEdit.container47",
            class: "mx-name-container47 spacing-outer-bottom-medium",
            style: void 0,
            renderMode: "div",
            onClick: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Text,
                {
                  key: "p.TaskTracker.TaskEdit.text3",
                  $widgetId: "p.TaskTracker.TaskEdit.text3",
                  class: "mx-name-text3 text-semibold",
                  style: void 0,
                  caption: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Assign to" }, "args": {} }
                    })
                  ]),
                  renderMode: "p"
                }
              ),
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.TaskTracker.TaskEdit.layoutGrid3",
                  $widgetId: "p.TaskTracker.TaskEdit.layoutGrid3",
                  class: "mx-name-layoutGrid3 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.TaskTracker.TaskEdit.layoutGrid3$row0",
                        $widgetId: "p.TaskTracker.TaskEdit.layoutGrid3$row0",
                        class: "row align-children-center",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Div,
                            {
                              key: "p.TaskTracker.TaskEdit.layoutGrid3$row0$column0",
                              $widgetId: "p.TaskTracker.TaskEdit.layoutGrid3$row0$column0",
                              class: "col-lg-9 col-md col",
                              style: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p.TaskTracker.TaskEdit.referenceSelector1$formGroup",
                                    $widgetId: "p.TaskTracker.TaskEdit.referenceSelector1$formGroup",
                                    class: "mx-name-referenceSelector1 spacing-outer-bottom-none",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $Combobox,
                                        {
                                          key: "p.TaskTracker.TaskEdit.referenceSelector1",
                                          $widgetId: "p.TaskTracker.TaskEdit.referenceSelector1",
                                          source: "context",
                                          optionsSourceType: "association",
                                          optionsSourceDatabaseDataSource: void 0,
                                          optionsSourceAssociationCaptionType: "attribute",
                                          optionsSourceDatabaseCaptionType: "attribute",
                                          optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                                            "path": "",
                                            "entity": "MendixSSO.MendixSSOUser",
                                            "attribute": "DisplayName",
                                            "attributeType": "String",
                                            "sortable": true,
                                            "filterable": true,
                                            "dataSourceId": "p.1",
                                            "isList": false
                                          }),
                                          optionsSourceAssociationCaptionExpression: void 0,
                                          attributeAssociation: AssociationProperty({
                                            "type": "Reference",
                                            "entity": "TaskTracker.Task",
                                            "path": "",
                                            "attribute": "TaskTracker.Task_MendixSSOUser_Assignee",
                                            "endpointEntity": "MendixSSO.MendixSSOUser",
                                            "selectableObjectsId": "p.1",
                                            "scope": "p.TaskTracker.TaskEdit.dataView1",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                          }),
                                          optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                            "dataSourceId": "p.1",
                                            "entity": "MendixSSO.MendixSSOUser",
                                            "scope": "p.TaskTracker.TaskEdit.dataView1",
                                            "operationId": "yA9DpnZlrlqaCo0lHWf/9A",
                                            "sort": []
                                          }),
                                          optionsSourceStaticDataSource: [],
                                          emptyOptionText: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          noOptionsText: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          clearable: true,
                                          optionsSourceAssociationCustomContentType: "no",
                                          optionsSourceAssociationCustomContent: void 0,
                                          optionsSourceDatabaseCustomContentType: "no",
                                          staticDataSourceCustomContentType: "no",
                                          showFooter: false,
                                          menuFooterContent: void 0,
                                          selectionMethod: "checkbox",
                                          selectedItemsStyle: "text",
                                          selectAllButton: false,
                                          selectAllButtonCaption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                            })
                                          ]),
                                          readOnlyStyle: "bordered",
                                          onChangeEvent: void 0,
                                          onEnterEvent: void 0,
                                          onLeaveEvent: void 0,
                                          ariaRequired: ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": false }, "args": {} }
                                          }),
                                          clearButtonAriaLabel: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                            })
                                          ]),
                                          removeValueAriaLabel: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                                            })
                                          ]),
                                          a11ySelectedValue: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                                            })
                                          ]),
                                          a11yOptionsAvailable: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                                            })
                                          ]),
                                          a11yInstructions: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                                            })
                                          ]),
                                          lazyLoading: true,
                                          loadingType: "spinner",
                                          selectedItemsSorting: "none",
                                          filterType: "contains",
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p.TaskTracker.TaskEdit.referenceSelector1"
                                          })
                                        }
                                      )
                                    ],
                                    caption: void 0,
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.TaskTracker.TaskEdit.referenceSelector1"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.TaskTracker.TaskEdit.referenceSelector1"
                                    })
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Div,
                            {
                              key: "p.TaskTracker.TaskEdit.layoutGrid3$row0$column1",
                              $widgetId: "p.TaskTracker.TaskEdit.layoutGrid3$row0$column1",
                              class: "col-lg-3 col-md col",
                              style: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.TaskTracker.TaskEdit.actionButton8$visibility",
                                    $widgetId: "p.TaskTracker.TaskEdit.actionButton8$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Manager" }, { "type": "literal", "value": "Member" }] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p.TaskTracker.TaskEdit.actionButton8",
                                          $widgetId: "p.TaskTracker.TaskEdit.actionButton8",
                                          buttonId: "p.TaskTracker.TaskEdit.actionButton8",
                                          class: "mx-name-actionButton8 pull-right",
                                          style: void 0,
                                          tabIndex: void 0,
                                          renderType: "button",
                                          role: void 0,
                                          buttonClass: "btn-default",
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Assign to Me" }, "args": {} }
                                            })
                                          ]),
                                          tooltip: TextProperty({
                                            "value": selectTranslation([
                                              ""
                                            ])
                                          }),
                                          icon: void 0,
                                          action: ActionProperty({
                                            "action": { "type": "callMicroflow", "argMap": { "Task": { "widget": "$Task", "source": "object" } }, "config": { "operationId": "9Qmedk4UCliu5EaUw+kwTg", "validate": "view", "allowedRoles": ["Manager", "Member"] }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                          })
                                        }
                                      )
                                    ]
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              )
            ],
            ariaHidden: false
          }
        ),
        /* @__PURE__ */ React.createElement(
          $Container,
          {
            key: "p.TaskTracker.TaskEdit.container2",
            $widgetId: "p.TaskTracker.TaskEdit.container2",
            class: "mx-name-container2 spacing-outer-bottom-large",
            style: void 0,
            renderMode: "div",
            onClick: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Text,
                {
                  key: "p.TaskTracker.TaskEdit.text11",
                  $widgetId: "p.TaskTracker.TaskEdit.text11",
                  class: "mx-name-text11 text-semibold",
                  style: void 0,
                  caption: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Priority" }, "args": {} }
                    })
                  ]),
                  renderMode: "p"
                }
              ),
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.TaskTracker.TaskEdit.layoutGrid2",
                  $widgetId: "p.TaskTracker.TaskEdit.layoutGrid2",
                  class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.TaskTracker.TaskEdit.layoutGrid2$row0",
                        $widgetId: "p.TaskTracker.TaskEdit.layoutGrid2$row0",
                        class: "row",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Div,
                            {
                              key: "p.TaskTracker.TaskEdit.layoutGrid2$row0$column0",
                              $widgetId: "p.TaskTracker.TaskEdit.layoutGrid2$row0$column0",
                              class: "col-lg-auto col-md-auto col-auto",
                              style: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.TaskTracker.TaskEdit.container23",
                                    $widgetId: "p.TaskTracker.TaskEdit.container23",
                                    class: "mx-name-container23 option brand-info col-center",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.TaskTracker.TaskEdit.container24$visibility",
                                          $widgetId: "p.TaskTracker.TaskEdit.container24$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Priority" }, { "type": "literal", "value": "Low" }] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskEdit.dataView1", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $Container,
                                              {
                                                key: "p.TaskTracker.TaskEdit.container24",
                                                $widgetId: "p.TaskTracker.TaskEdit.container24",
                                                class: "mx-name-container24 option-select",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: void 0,
                                                ariaHidden: false
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.TaskTracker.TaskEdit.container25",
                                          $widgetId: "p.TaskTracker.TaskEdit.container25",
                                          class: "mx-name-container25 option-wrapper",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Image,
                                              {
                                                key: "p.TaskTracker.TaskEdit.image1",
                                                $widgetId: "p.TaskTracker.TaskEdit.image1",
                                                datasource: "image",
                                                imageObject: WebStaticImageProperty({
                                                  "image": { "uri": "img/TaskTracker$Images$Low.png" }
                                                }),
                                                defaultImageDynamic: void 0,
                                                imageUrl: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                imageIcon: void 0,
                                                isBackgroundImage: false,
                                                children: void 0,
                                                onClickType: "action",
                                                onClick: ActionProperty({
                                                  "action": { "type": "callMicroflow", "argMap": { "Task": { "widget": "$Task", "source": "object" } }, "config": { "operationId": "yXq80egyfl2GF9flsWSCfw", "validate": "view", "allowedRoles": ["Manager", "Member"] }, "disabledDuringExecution": false },
                                                  "argumentTypes": {}
                                                }),
                                                alternativeText: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                widthUnit: "pixels",
                                                width: 72,
                                                heightUnit: "pixels",
                                                height: 72,
                                                iconSize: 14,
                                                displayAs: "fullImage",
                                                responsive: true,
                                                class: "mx-name-image1 option-icon",
                                                style: void 0,
                                                tabIndex: void 0
                                              }
                                            )
                                          ],
                                          ariaHidden: false
                                        }
                                      )
                                    ],
                                    ariaHidden: false
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.TaskTracker.TaskEdit.text1",
                                    $widgetId: "p.TaskTracker.TaskEdit.text1",
                                    class: "mx-name-text1 text-center d-block",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Low" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Div,
                            {
                              key: "p.TaskTracker.TaskEdit.layoutGrid2$row0$column1",
                              $widgetId: "p.TaskTracker.TaskEdit.layoutGrid2$row0$column1",
                              class: "col-lg-auto col-md-auto col-auto",
                              style: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.TaskTracker.TaskEdit.container26",
                                    $widgetId: "p.TaskTracker.TaskEdit.container26",
                                    class: "mx-name-container26 option brand-warning col-center",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.TaskTracker.TaskEdit.container27$visibility",
                                          $widgetId: "p.TaskTracker.TaskEdit.container27$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Priority" }, { "type": "literal", "value": "Medium" }] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskEdit.dataView1", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $Container,
                                              {
                                                key: "p.TaskTracker.TaskEdit.container27",
                                                $widgetId: "p.TaskTracker.TaskEdit.container27",
                                                class: "mx-name-container27 option-select",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: void 0,
                                                ariaHidden: false
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.TaskTracker.TaskEdit.container28",
                                          $widgetId: "p.TaskTracker.TaskEdit.container28",
                                          class: "mx-name-container28 option-wrapper",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Image,
                                              {
                                                key: "p.TaskTracker.TaskEdit.image2",
                                                $widgetId: "p.TaskTracker.TaskEdit.image2",
                                                datasource: "image",
                                                imageObject: WebStaticImageProperty({
                                                  "image": { "uri": "img/TaskTracker$Images$Medium.png" }
                                                }),
                                                defaultImageDynamic: void 0,
                                                imageUrl: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                imageIcon: void 0,
                                                isBackgroundImage: false,
                                                children: void 0,
                                                onClickType: "action",
                                                onClick: ActionProperty({
                                                  "action": { "type": "callMicroflow", "argMap": { "Task": { "widget": "$Task", "source": "object" } }, "config": { "operationId": "1eXUIjCKvVWs/j/md8RA6w", "validate": "view", "allowedRoles": ["Manager", "Member"] }, "disabledDuringExecution": false },
                                                  "argumentTypes": {}
                                                }),
                                                alternativeText: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                widthUnit: "pixels",
                                                width: 72,
                                                heightUnit: "pixels",
                                                height: 72,
                                                iconSize: 14,
                                                displayAs: "fullImage",
                                                responsive: true,
                                                class: "mx-name-image2 option-icon",
                                                style: void 0,
                                                tabIndex: void 0
                                              }
                                            )
                                          ],
                                          ariaHidden: false
                                        }
                                      )
                                    ],
                                    ariaHidden: false
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.TaskTracker.TaskEdit.text8",
                                    $widgetId: "p.TaskTracker.TaskEdit.text8",
                                    class: "mx-name-text8 text-center d-block",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Medium" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Div,
                            {
                              key: "p.TaskTracker.TaskEdit.layoutGrid2$row0$column2",
                              $widgetId: "p.TaskTracker.TaskEdit.layoutGrid2$row0$column2",
                              class: "col-lg-auto col-md-auto col-auto",
                              style: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.TaskTracker.TaskEdit.container29",
                                    $widgetId: "p.TaskTracker.TaskEdit.container29",
                                    class: "mx-name-container29 option brand-danger col-center",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.TaskTracker.TaskEdit.container30$visibility",
                                          $widgetId: "p.TaskTracker.TaskEdit.container30$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Priority" }, { "type": "literal", "value": "High" }] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskEdit.dataView1", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $Container,
                                              {
                                                key: "p.TaskTracker.TaskEdit.container30",
                                                $widgetId: "p.TaskTracker.TaskEdit.container30",
                                                class: "mx-name-container30 option-select",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: void 0,
                                                ariaHidden: false
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.TaskTracker.TaskEdit.container31",
                                          $widgetId: "p.TaskTracker.TaskEdit.container31",
                                          class: "mx-name-container31 option-wrapper",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Image,
                                              {
                                                key: "p.TaskTracker.TaskEdit.image3",
                                                $widgetId: "p.TaskTracker.TaskEdit.image3",
                                                datasource: "image",
                                                imageObject: WebStaticImageProperty({
                                                  "image": { "uri": "img/TaskTracker$Images$High.png" }
                                                }),
                                                defaultImageDynamic: void 0,
                                                imageUrl: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                imageIcon: void 0,
                                                isBackgroundImage: false,
                                                children: void 0,
                                                onClickType: "action",
                                                onClick: ActionProperty({
                                                  "action": { "type": "callMicroflow", "argMap": { "Task": { "widget": "$Task", "source": "object" } }, "config": { "operationId": "h5ineBlgk1qEeL3qX1WGZg", "validate": "view", "allowedRoles": ["Manager", "Member"] }, "disabledDuringExecution": false },
                                                  "argumentTypes": {}
                                                }),
                                                alternativeText: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                widthUnit: "pixels",
                                                width: 72,
                                                heightUnit: "pixels",
                                                height: 72,
                                                iconSize: 14,
                                                displayAs: "fullImage",
                                                responsive: true,
                                                class: "mx-name-image3 option-icon",
                                                style: void 0,
                                                tabIndex: void 0
                                              }
                                            )
                                          ],
                                          ariaHidden: false
                                        }
                                      )
                                    ],
                                    ariaHidden: false
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.TaskTracker.TaskEdit.text9",
                                    $widgetId: "p.TaskTracker.TaskEdit.text9",
                                    class: "mx-name-text9 text-center d-block",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "High" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Div,
                            {
                              key: "p.TaskTracker.TaskEdit.layoutGrid2$row0$column3",
                              $widgetId: "p.TaskTracker.TaskEdit.layoutGrid2$row0$column3",
                              class: "col-lg col-md col",
                              style: void 0,
                              content: void 0
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              )
            ],
            ariaHidden: false
          }
        ),
        /* @__PURE__ */ React.createElement(
          $Container,
          {
            key: "p.TaskTracker.TaskEdit.container9",
            $widgetId: "p.TaskTracker.TaskEdit.container9",
            class: "mx-name-container9 spacing-outer-bottom-large",
            style: void 0,
            renderMode: "div",
            onClick: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Text,
                {
                  key: "p.TaskTracker.TaskEdit.text12",
                  $widgetId: "p.TaskTracker.TaskEdit.text12",
                  class: "mx-name-text12 text-semibold",
                  style: void 0,
                  caption: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Status\r\n" }, "args": {} }
                    })
                  ]),
                  renderMode: "p"
                }
              ),
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.TaskTracker.TaskEdit.layoutGrid1",
                  $widgetId: "p.TaskTracker.TaskEdit.layoutGrid1",
                  class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.TaskTracker.TaskEdit.layoutGrid1$row0",
                        $widgetId: "p.TaskTracker.TaskEdit.layoutGrid1$row0",
                        class: "row",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Div,
                            {
                              key: "p.TaskTracker.TaskEdit.layoutGrid1$row0$column0",
                              $widgetId: "p.TaskTracker.TaskEdit.layoutGrid1$row0$column0",
                              class: "col-lg-auto col-md-auto col-auto",
                              style: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.TaskTracker.TaskEdit.container11",
                                    $widgetId: "p.TaskTracker.TaskEdit.container11",
                                    class: "mx-name-container11 option col-center",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.TaskTracker.TaskEdit.container12$visibility",
                                          $widgetId: "p.TaskTracker.TaskEdit.container12$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Status" }, { "type": "literal", "value": "To_Do" }] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskEdit.dataView1", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $Container,
                                              {
                                                key: "p.TaskTracker.TaskEdit.container12",
                                                $widgetId: "p.TaskTracker.TaskEdit.container12",
                                                class: "mx-name-container12 option-select",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: void 0,
                                                ariaHidden: false
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.TaskTracker.TaskEdit.container20",
                                          $widgetId: "p.TaskTracker.TaskEdit.container20",
                                          class: "mx-name-container20 option-wrapper",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Image,
                                              {
                                                key: "p.TaskTracker.TaskEdit.image4",
                                                $widgetId: "p.TaskTracker.TaskEdit.image4",
                                                datasource: "image",
                                                imageObject: WebStaticImageProperty({
                                                  "image": { "uri": "img/TaskTracker$Images$ToDo.png" }
                                                }),
                                                defaultImageDynamic: void 0,
                                                imageUrl: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                imageIcon: void 0,
                                                isBackgroundImage: false,
                                                children: void 0,
                                                onClickType: "action",
                                                onClick: ActionProperty({
                                                  "action": { "type": "callMicroflow", "argMap": { "Task": { "widget": "$Task", "source": "object" } }, "config": { "operationId": "hjd04ZVDSFu9xDX2tf65Cw", "validate": "view", "allowedRoles": ["Manager", "Member"] }, "disabledDuringExecution": false },
                                                  "argumentTypes": {}
                                                }),
                                                alternativeText: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                widthUnit: "pixels",
                                                width: 72,
                                                heightUnit: "pixels",
                                                height: 72,
                                                iconSize: 14,
                                                displayAs: "fullImage",
                                                responsive: true,
                                                class: "mx-name-image4 option-icon img-contain img-center",
                                                style: void 0,
                                                tabIndex: void 0
                                              }
                                            )
                                          ],
                                          ariaHidden: false
                                        }
                                      )
                                    ],
                                    ariaHidden: false
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.TaskTracker.TaskEdit.text4",
                                    $widgetId: "p.TaskTracker.TaskEdit.text4",
                                    class: "mx-name-text4 text-center d-block",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "To Do" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Div,
                            {
                              key: "p.TaskTracker.TaskEdit.layoutGrid1$row0$column1",
                              $widgetId: "p.TaskTracker.TaskEdit.layoutGrid1$row0$column1",
                              class: "col-lg-auto col-md-auto col-auto",
                              style: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.TaskTracker.TaskEdit.container13",
                                    $widgetId: "p.TaskTracker.TaskEdit.container13",
                                    class: "mx-name-container13 option col-center",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.TaskTracker.TaskEdit.container14$visibility",
                                          $widgetId: "p.TaskTracker.TaskEdit.container14$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Status" }, { "type": "literal", "value": "Running" }] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskEdit.dataView1", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $Container,
                                              {
                                                key: "p.TaskTracker.TaskEdit.container14",
                                                $widgetId: "p.TaskTracker.TaskEdit.container14",
                                                class: "mx-name-container14 option-select",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: void 0,
                                                ariaHidden: false
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.TaskTracker.TaskEdit.container19",
                                          $widgetId: "p.TaskTracker.TaskEdit.container19",
                                          class: "mx-name-container19 option-wrapper",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Image,
                                              {
                                                key: "p.TaskTracker.TaskEdit.image5",
                                                $widgetId: "p.TaskTracker.TaskEdit.image5",
                                                datasource: "image",
                                                imageObject: WebStaticImageProperty({
                                                  "image": { "uri": "img/TaskTracker$Images$Running.png" }
                                                }),
                                                defaultImageDynamic: void 0,
                                                imageUrl: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                imageIcon: void 0,
                                                isBackgroundImage: false,
                                                children: void 0,
                                                onClickType: "action",
                                                onClick: ActionProperty({
                                                  "action": { "type": "callMicroflow", "argMap": { "Task": { "widget": "$Task", "source": "object" } }, "config": { "operationId": "op7ueT2YxlW6wGQ6roALlg", "validate": "view", "allowedRoles": ["Manager", "Member"] }, "disabledDuringExecution": false },
                                                  "argumentTypes": {}
                                                }),
                                                alternativeText: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                widthUnit: "pixels",
                                                width: 72,
                                                heightUnit: "pixels",
                                                height: 72,
                                                iconSize: 14,
                                                displayAs: "fullImage",
                                                responsive: true,
                                                class: "mx-name-image5 option-icon img-center img-contain",
                                                style: void 0,
                                                tabIndex: void 0
                                              }
                                            )
                                          ],
                                          ariaHidden: false
                                        }
                                      )
                                    ],
                                    ariaHidden: false
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.TaskTracker.TaskEdit.text5",
                                    $widgetId: "p.TaskTracker.TaskEdit.text5",
                                    class: "mx-name-text5 text-center d-block",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "In Progress" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Div,
                            {
                              key: "p.TaskTracker.TaskEdit.layoutGrid1$row0$column2",
                              $widgetId: "p.TaskTracker.TaskEdit.layoutGrid1$row0$column2",
                              class: "col-lg-auto col-md-auto col-auto",
                              style: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.TaskTracker.TaskEdit.container15",
                                    $widgetId: "p.TaskTracker.TaskEdit.container15",
                                    class: "mx-name-container15 option col-center",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.TaskTracker.TaskEdit.container16$visibility",
                                          $widgetId: "p.TaskTracker.TaskEdit.container16$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Status" }, { "type": "literal", "value": "Review" }] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskEdit.dataView1", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $Container,
                                              {
                                                key: "p.TaskTracker.TaskEdit.container16",
                                                $widgetId: "p.TaskTracker.TaskEdit.container16",
                                                class: "mx-name-container16 option-select",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: void 0,
                                                ariaHidden: false
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.TaskTracker.TaskEdit.container21",
                                          $widgetId: "p.TaskTracker.TaskEdit.container21",
                                          class: "mx-name-container21 option-wrapper",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Image,
                                              {
                                                key: "p.TaskTracker.TaskEdit.image6",
                                                $widgetId: "p.TaskTracker.TaskEdit.image6",
                                                datasource: "image",
                                                imageObject: WebStaticImageProperty({
                                                  "image": { "uri": "img/TaskTracker$Images$Review.png" }
                                                }),
                                                defaultImageDynamic: void 0,
                                                imageUrl: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                imageIcon: void 0,
                                                isBackgroundImage: false,
                                                children: void 0,
                                                onClickType: "action",
                                                onClick: ActionProperty({
                                                  "action": { "type": "callMicroflow", "argMap": { "Task": { "widget": "$Task", "source": "object" } }, "config": { "operationId": "ymSXx+UnXlKGTxlIT7a8MQ", "validate": "view", "allowedRoles": ["Manager", "Member"] }, "disabledDuringExecution": false },
                                                  "argumentTypes": {}
                                                }),
                                                alternativeText: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                widthUnit: "pixels",
                                                width: 72,
                                                heightUnit: "pixels",
                                                height: 72,
                                                iconSize: 14,
                                                displayAs: "fullImage",
                                                responsive: true,
                                                class: "mx-name-image6 option-icon img-center img-contain",
                                                style: void 0,
                                                tabIndex: void 0
                                              }
                                            )
                                          ],
                                          ariaHidden: false
                                        }
                                      )
                                    ],
                                    ariaHidden: false
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.TaskTracker.TaskEdit.text6",
                                    $widgetId: "p.TaskTracker.TaskEdit.text6",
                                    class: "mx-name-text6 text-center d-block",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Review" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Div,
                            {
                              key: "p.TaskTracker.TaskEdit.layoutGrid1$row0$column3",
                              $widgetId: "p.TaskTracker.TaskEdit.layoutGrid1$row0$column3",
                              class: "col-lg-auto col-md-auto col-auto",
                              style: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.TaskTracker.TaskEdit.container17",
                                    $widgetId: "p.TaskTracker.TaskEdit.container17",
                                    class: "mx-name-container17 option col-center",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.TaskTracker.TaskEdit.container18$visibility",
                                          $widgetId: "p.TaskTracker.TaskEdit.container18$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Status" }, { "type": "literal", "value": "Done" }] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskEdit.dataView1", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $Container,
                                              {
                                                key: "p.TaskTracker.TaskEdit.container18",
                                                $widgetId: "p.TaskTracker.TaskEdit.container18",
                                                class: "mx-name-container18 option-select",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: void 0,
                                                ariaHidden: false
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.TaskTracker.TaskEdit.container22",
                                          $widgetId: "p.TaskTracker.TaskEdit.container22",
                                          class: "mx-name-container22 option-wrapper",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Image,
                                              {
                                                key: "p.TaskTracker.TaskEdit.image7",
                                                $widgetId: "p.TaskTracker.TaskEdit.image7",
                                                datasource: "image",
                                                imageObject: WebStaticImageProperty({
                                                  "image": { "uri": "img/TaskTracker$Images$Done.png" }
                                                }),
                                                defaultImageDynamic: void 0,
                                                imageUrl: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                imageIcon: void 0,
                                                isBackgroundImage: false,
                                                children: void 0,
                                                onClickType: "action",
                                                onClick: ActionProperty({
                                                  "action": { "type": "callMicroflow", "argMap": { "Task": { "widget": "$Task", "source": "object" } }, "config": { "operationId": "s3rN6mycGFWPMkLW+2tb4Q", "validate": "view", "allowedRoles": ["Manager", "Member"] }, "disabledDuringExecution": false },
                                                  "argumentTypes": {}
                                                }),
                                                alternativeText: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                widthUnit: "pixels",
                                                width: 72,
                                                heightUnit: "pixels",
                                                height: 72,
                                                iconSize: 14,
                                                displayAs: "fullImage",
                                                responsive: true,
                                                class: "mx-name-image7 option-icon img-center img-contain",
                                                style: void 0,
                                                tabIndex: void 0
                                              }
                                            )
                                          ],
                                          ariaHidden: false
                                        }
                                      )
                                    ],
                                    ariaHidden: false
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.TaskTracker.TaskEdit.text7",
                                    $widgetId: "p.TaskTracker.TaskEdit.text7",
                                    class: "mx-name-text7 text-center d-block",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Done" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Div,
                            {
                              key: "p.TaskTracker.TaskEdit.layoutGrid1$row0$column4",
                              $widgetId: "p.TaskTracker.TaskEdit.layoutGrid1$row0$column4",
                              class: "col-lg col-md col",
                              style: void 0,
                              content: void 0
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              )
            ],
            ariaHidden: false
          }
        ),
        /* @__PURE__ */ React.createElement(
          $GroupBox,
          {
            key: "p.TaskTracker.TaskEdit.groupBox1",
            $widgetId: "p.TaskTracker.TaskEdit.groupBox1",
            id: DerivedUniqueIdProperty({
              "widgetId": "p.TaskTracker.TaskEdit.groupBox1"
            }),
            class: "mx-name-groupBox1 groupbox-transparent",
            style: void 0,
            tabIndex: void 0,
            header: selectTranslation([
              ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "Comments" }, "args": {} }
              })
            ]),
            renderMode: "div",
            collapsible: "notInitially",
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.TaskTracker.TaskEdit.layoutGrid6",
                  $widgetId: "p.TaskTracker.TaskEdit.layoutGrid6",
                  class: "mx-name-layoutGrid6 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.TaskTracker.TaskEdit.layoutGrid6$row0",
                        $widgetId: "p.TaskTracker.TaskEdit.layoutGrid6$row0",
                        class: "row",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Div,
                            {
                              key: "p.TaskTracker.TaskEdit.layoutGrid6$row0$column0",
                              $widgetId: "p.TaskTracker.TaskEdit.layoutGrid6$row0$column0",
                              class: "col-lg-1 col-md col",
                              style: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $DataView,
                                  {
                                    key: "p.TaskTracker.TaskEdit.dataView4",
                                    $widgetId: "p.TaskTracker.TaskEdit.dataView4",
                                    class: "mx-name-dataView4 form-horizontal",
                                    style: void 0,
                                    tabIndex: void 0,
                                    object: MicroflowObjectProperty({
                                      "dataSourceId": "p.178",
                                      "scope": "p.TaskTracker.TaskEdit.dataView1",
                                      "editable": true,
                                      "operationId": "DoUq8ANzWFW7IEwTzoRPUA",
                                      "argMap": {}
                                    }),
                                    emptyMessage: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    body: [
                                      /* @__PURE__ */ React.createElement(
                                        $Image,
                                        {
                                          key: "p.TaskTracker.TaskEdit.image11",
                                          $widgetId: "p.TaskTracker.TaskEdit.image11",
                                          datasource: "imageUrl",
                                          imageObject: void 0,
                                          defaultImageDynamic: void 0,
                                          imageUrl: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "variable", "variable": "dataView1", "path": "TaskTracker.Task_MendixSSOUser_Assignee/MendixSSO.MendixSSOUser/AvatarURL" }, "args": { "dataView1": { "widget": "p.TaskTracker.TaskEdit.dataView1", "source": "object" } } }
                                            })
                                          ]),
                                          imageIcon: void 0,
                                          isBackgroundImage: false,
                                          children: void 0,
                                          onClickType: "action",
                                          onClick: void 0,
                                          alternativeText: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          widthUnit: "pixels",
                                          width: 25,
                                          heightUnit: "pixels",
                                          height: 25,
                                          iconSize: 14,
                                          displayAs: "fullImage",
                                          responsive: true,
                                          class: "mx-name-image11 img-circle",
                                          style: void 0,
                                          tabIndex: void 0
                                        }
                                      )
                                    ],
                                    hideFooter: true,
                                    footer: void 0
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Div,
                            {
                              key: "p.TaskTracker.TaskEdit.layoutGrid6$row0$column1",
                              $widgetId: "p.TaskTracker.TaskEdit.layoutGrid6$row0$column1",
                              class: "col-lg col-md col",
                              style: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $DataView,
                                  {
                                    key: "p.TaskTracker.TaskEdit.dataView2",
                                    $widgetId: "p.TaskTracker.TaskEdit.dataView2",
                                    class: "mx-name-dataView2 form-vertical",
                                    style: void 0,
                                    tabIndex: void 0,
                                    object: MicroflowObjectProperty({
                                      "dataSourceId": "p.185",
                                      "scope": "p.TaskTracker.TaskEdit.dataView1",
                                      "editable": true,
                                      "operationId": "Syd+4kSnGlKSFnF8SgQNFA",
                                      "argMap": { "Task": { "widget": "$Task", "source": "object" } }
                                    }),
                                    emptyMessage: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    body: [
                                      /* @__PURE__ */ React.createElement(
                                        $FormGroup,
                                        {
                                          key: "p.TaskTracker.TaskEdit.textArea2$formGroup",
                                          $widgetId: "p.TaskTracker.TaskEdit.textArea2$formGroup",
                                          class: "mx-name-textArea2 spacing-outer-bottom mx-textarea",
                                          style: void 0,
                                          control: [
                                            /* @__PURE__ */ React.createElement(
                                              $TextArea,
                                              {
                                                key: "p.TaskTracker.TaskEdit.textArea2",
                                                $widgetId: "p.TaskTracker.TaskEdit.textArea2",
                                                inputValue: AttributeProperty({
                                                  "scope": "p.TaskTracker.TaskEdit.dataView2",
                                                  "path": "",
                                                  "entity": "TaskTracker.CommentHelper",
                                                  "attribute": "Content",
                                                  "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                  "isList": false,
                                                  "validation": null
                                                }),
                                                counterMessage: void 0,
                                                maxLength: void 0,
                                                numberOfLines: 3,
                                                autoGrow: false,
                                                placeholder: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Add a comment..." }, "args": {} }
                                                  })
                                                ]),
                                                readOnlyStyle: "control",
                                                textTooLongMessage: void 0,
                                                onEnter: void 0,
                                                onLeave: void 0,
                                                ariaLabel: void 0,
                                                ariaRequired: void 0,
                                                submitWhileEditing: false,
                                                submitDelay: 300,
                                                tabIndex: void 0,
                                                id: DerivedUniqueIdProperty({
                                                  "widgetId": "p.TaskTracker.TaskEdit.textArea2"
                                                })
                                              }
                                            )
                                          ],
                                          caption: void 0,
                                          labelFor: DerivedUniqueIdProperty({
                                            "widgetId": "p.TaskTracker.TaskEdit.textArea2"
                                          }),
                                          width: void 0,
                                          orientation: "vertical",
                                          hasError: ValidationProperty({
                                            "inputWidgetId": "p.TaskTracker.TaskEdit.textArea2"
                                          })
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.TaskTracker.TaskEdit.actionButton3$visibility",
                                          $widgetId: "p.TaskTracker.TaskEdit.actionButton3$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Manager" }, { "type": "literal", "value": "Member" }] }, "args": {} }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.TaskTracker.TaskEdit.actionButton3",
                                                $widgetId: "p.TaskTracker.TaskEdit.actionButton3",
                                                buttonId: "p.TaskTracker.TaskEdit.actionButton3",
                                                class: "mx-name-actionButton3 btn-sm pull-right",
                                                style: void 0,
                                                tabIndex: void 0,
                                                renderType: "button",
                                                role: void 0,
                                                buttonClass: "btn-default",
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Post comment" }, "args": {} }
                                                  })
                                                ]),
                                                tooltip: TextProperty({
                                                  "value": selectTranslation([
                                                    ""
                                                  ])
                                                }),
                                                icon: void 0,
                                                action: ActionProperty({
                                                  "action": { "type": "callMicroflow", "argMap": { "CommentHelper": { "widget": "p.TaskTracker.TaskEdit.dataView2", "source": "object" }, "Task": { "widget": "$Task", "source": "object" } }, "config": { "operationId": "LUShWNH6clutORJVYNL0uw", "validate": "view", "allowedRoles": ["Manager", "Member"] }, "disabledDuringExecution": true },
                                                  "abortOnServerValidation": true
                                                })
                                              }
                                            )
                                          ]
                                        }
                                      )
                                    ],
                                    hideFooter: true,
                                    footer: void 0
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ React.createElement(
                $ListView,
                {
                  key: "p.TaskTracker.TaskEdit.listView2",
                  $widgetId: "p.TaskTracker.TaskEdit.listView2",
                  class: "mx-name-listView2 listview-empty listview-stylingless",
                  style: void 0,
                  listValue: MicroflowObjectListProperty({
                    "argMap": { "Task": { "widget": "$Task", "source": "object" } },
                    "dataSourceId": "p.6",
                    "entity": "TaskTracker.Comment",
                    "scope": "p.TaskTracker.TaskEdit.dataView1",
                    "operationId": "kzAs7KixblugNE5FGkCv6w"
                  }),
                  itemTemplate: TemplatedWidgetProperty({
                    "dataSourceId": "p.6",
                    "editable": false,
                    "children": () => [
                      /* @__PURE__ */ React.createElement(
                        $Div,
                        {
                          key: "p.TaskTracker.TaskEdit.layoutGrid5",
                          $widgetId: "p.TaskTracker.TaskEdit.layoutGrid5",
                          class: "mx-name-layoutGrid5 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
                          style: void 0,
                          content: [
                            /* @__PURE__ */ React.createElement(
                              $Div,
                              {
                                key: "p.TaskTracker.TaskEdit.layoutGrid5$row0",
                                $widgetId: "p.TaskTracker.TaskEdit.layoutGrid5$row0",
                                class: "row",
                                style: void 0,
                                content: [
                                  /* @__PURE__ */ React.createElement(
                                    $Div,
                                    {
                                      key: "p.TaskTracker.TaskEdit.layoutGrid5$row0$column0",
                                      $widgetId: "p.TaskTracker.TaskEdit.layoutGrid5$row0$column0",
                                      class: "col-lg-1 col-md col",
                                      style: void 0,
                                      content: [
                                        /* @__PURE__ */ React.createElement(
                                          $Image,
                                          {
                                            key: "p.TaskTracker.TaskEdit.image9",
                                            $widgetId: "p.TaskTracker.TaskEdit.image9",
                                            datasource: "imageUrl",
                                            imageObject: void 0,
                                            defaultImageDynamic: void 0,
                                            imageUrl: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "TaskTracker.Comment_MendixSSOUser/MendixSSO.MendixSSOUser/AvatarURL" }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskEdit.listView2", "source": "object" } } }
                                              })
                                            ]),
                                            imageIcon: void 0,
                                            isBackgroundImage: false,
                                            children: void 0,
                                            onClickType: "action",
                                            onClick: void 0,
                                            alternativeText: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            widthUnit: "pixels",
                                            width: 25,
                                            heightUnit: "pixels",
                                            height: 25,
                                            iconSize: 14,
                                            displayAs: "fullImage",
                                            responsive: true,
                                            class: "mx-name-image9 img-circle",
                                            style: void 0,
                                            tabIndex: void 0
                                          }
                                        )
                                      ]
                                    }
                                  ),
                                  /* @__PURE__ */ React.createElement(
                                    $Div,
                                    {
                                      key: "p.TaskTracker.TaskEdit.layoutGrid5$row0$column1",
                                      $widgetId: "p.TaskTracker.TaskEdit.layoutGrid5$row0$column1",
                                      class: "col-lg col-md col",
                                      style: void 0,
                                      content: [
                                        /* @__PURE__ */ React.createElement(
                                          $Container,
                                          {
                                            key: "p.TaskTracker.TaskEdit.container33",
                                            $widgetId: "p.TaskTracker.TaskEdit.container33",
                                            class: "mx-name-container33",
                                            style: void 0,
                                            renderMode: "div",
                                            onClick: void 0,
                                            content: [
                                              /* @__PURE__ */ React.createElement(
                                                $Text,
                                                {
                                                  key: "p.TaskTracker.TaskEdit.text10",
                                                  $widgetId: "p.TaskTracker.TaskEdit.text10",
                                                  class: "mx-name-text10 d-block nowrap line-height-1 text-bold",
                                                  style: void 0,
                                                  caption: selectTranslation([
                                                    ExpressionProperty({
                                                      "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "TaskTracker.Comment_MendixSSOUser/MendixSSO.MendixSSOUser/DisplayName" }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskEdit.listView2", "source": "object" } } }
                                                    })
                                                  ]),
                                                  renderMode: "span"
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $Text,
                                                {
                                                  key: "p.TaskTracker.TaskEdit.text37",
                                                  $widgetId: "p.TaskTracker.TaskEdit.text37",
                                                  class: "mx-name-text37 text-small text-detail",
                                                  style: void 0,
                                                  caption: selectTranslation([
                                                    ExpressionProperty({
                                                      "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "createdDate" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskEdit.listView2", "source": "object" } } }
                                                    })
                                                  ]),
                                                  renderMode: "span"
                                                }
                                              )
                                            ],
                                            ariaHidden: false
                                          }
                                        )
                                      ]
                                    }
                                  ),
                                  /* @__PURE__ */ React.createElement(
                                    $Div,
                                    {
                                      key: "p.TaskTracker.TaskEdit.layoutGrid5$row0$column2",
                                      $widgetId: "p.TaskTracker.TaskEdit.layoutGrid5$row0$column2",
                                      class: "col-lg-auto col-md col",
                                      style: void 0,
                                      content: [
                                        /* @__PURE__ */ React.createElement(
                                          $Container,
                                          {
                                            key: "p.TaskTracker.TaskEdit.container45",
                                            $widgetId: "p.TaskTracker.TaskEdit.container45",
                                            class: "mx-name-container45",
                                            style: void 0,
                                            renderMode: "div",
                                            onClick: void 0,
                                            content: [
                                              /* @__PURE__ */ React.createElement(
                                                $ConditionalVisibilityWrapper,
                                                {
                                                  key: "p.TaskTracker.TaskEdit.actionButton7$visibility",
                                                  $widgetId: "p.TaskTracker.TaskEdit.actionButton7$visibility",
                                                  visible: ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Manager" }, { "type": "literal", "value": "Member" }] }, "args": {} }
                                                  }),
                                                  contents: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $ActionButton,
                                                      {
                                                        key: "p.TaskTracker.TaskEdit.actionButton7",
                                                        $widgetId: "p.TaskTracker.TaskEdit.actionButton7",
                                                        buttonId: "p.TaskTracker.TaskEdit.actionButton7",
                                                        class: "mx-name-actionButton7 text-small text-danger",
                                                        style: void 0,
                                                        tabIndex: void 0,
                                                        renderType: "link",
                                                        role: "button",
                                                        buttonClass: "btn-default",
                                                        caption: selectTranslation([
                                                          ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "Delete" }, "args": {} }
                                                          })
                                                        ]),
                                                        tooltip: TextProperty({
                                                          "value": selectTranslation([
                                                            ""
                                                          ])
                                                        }),
                                                        icon: void 0,
                                                        action: ActionProperty({
                                                          "action": { "type": "deleteObject", "argMap": { "$object": { "widget": "p.TaskTracker.TaskEdit.listView2", "source": "object" } }, "config": { "closePage": false, "operationId": "tUbsYOb/TluqWNReRhOkcg" }, "disabledDuringExecution": true },
                                                          "abortOnServerValidation": true
                                                        })
                                                      }
                                                    )
                                                  ]
                                                }
                                              )
                                            ],
                                            ariaHidden: false
                                          }
                                        )
                                      ]
                                    }
                                  )
                                ]
                              }
                            ),
                            /* @__PURE__ */ React.createElement(
                              $Div,
                              {
                                key: "p.TaskTracker.TaskEdit.layoutGrid5$row1",
                                $widgetId: "p.TaskTracker.TaskEdit.layoutGrid5$row1",
                                class: "row align-children-center",
                                style: void 0,
                                content: [
                                  /* @__PURE__ */ React.createElement(
                                    $Div,
                                    {
                                      key: "p.TaskTracker.TaskEdit.layoutGrid5$row1$column0",
                                      $widgetId: "p.TaskTracker.TaskEdit.layoutGrid5$row1$column0",
                                      class: "col-lg-1 col-md col",
                                      style: void 0,
                                      content: void 0
                                    }
                                  ),
                                  /* @__PURE__ */ React.createElement(
                                    $Div,
                                    {
                                      key: "p.TaskTracker.TaskEdit.layoutGrid5$row1$column1",
                                      $widgetId: "p.TaskTracker.TaskEdit.layoutGrid5$row1$column1",
                                      class: "col-lg col-md col",
                                      style: void 0,
                                      content: [
                                        /* @__PURE__ */ React.createElement(
                                          $Container,
                                          {
                                            key: "p.TaskTracker.TaskEdit.container46",
                                            $widgetId: "p.TaskTracker.TaskEdit.container46",
                                            class: "mx-name-container46 shadow-small",
                                            style: void 0,
                                            renderMode: "div",
                                            onClick: void 0,
                                            content: [
                                              /* @__PURE__ */ React.createElement(
                                                $Text,
                                                {
                                                  key: "p.TaskTracker.TaskEdit.text2",
                                                  $widgetId: "p.TaskTracker.TaskEdit.text2",
                                                  class: "mx-name-text2 text-left d-block spacing-outer-left",
                                                  style: void 0,
                                                  caption: selectTranslation([
                                                    ExpressionProperty({
                                                      "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Content" }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskEdit.listView2", "source": "object" } } }
                                                    })
                                                  ]),
                                                  renderMode: "p"
                                                }
                                              )
                                            ],
                                            ariaHidden: false
                                          }
                                        )
                                      ]
                                    }
                                  )
                                ]
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }),
                  onClick: void 0,
                  pageSize: 5
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ React.createElement(
          $GroupBox,
          {
            key: "p.TaskTracker.TaskEdit.groupBox2",
            $widgetId: "p.TaskTracker.TaskEdit.groupBox2",
            id: DerivedUniqueIdProperty({
              "widgetId": "p.TaskTracker.TaskEdit.groupBox2"
            }),
            class: "mx-name-groupBox2 groupbox-transparent",
            style: void 0,
            tabIndex: void 0,
            header: selectTranslation([
              ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "Files" }, "args": {} }
              })
            ]),
            renderMode: "div",
            collapsible: "notInitially",
            content: [
              /* @__PURE__ */ React.createElement(
                $ListView,
                {
                  key: "p.TaskTracker.TaskEdit.listView1",
                  $widgetId: "p.TaskTracker.TaskEdit.listView1",
                  class: "mx-name-listView1 listview-empty listview-stylingless",
                  style: void 0,
                  listValue: MicroflowObjectListProperty({
                    "argMap": { "Task": { "widget": "$Task", "source": "object" } },
                    "dataSourceId": "p.9",
                    "entity": "TaskTracker.FileUpload",
                    "scope": "p.TaskTracker.TaskEdit.dataView1",
                    "operationId": "9HfV8pJyS1C/zcIJJtcL6A"
                  }),
                  itemTemplate: TemplatedWidgetProperty({
                    "dataSourceId": "p.9",
                    "editable": false,
                    "children": () => [
                      /* @__PURE__ */ React.createElement(
                        $Div,
                        {
                          key: "p.TaskTracker.TaskEdit.layoutGrid4",
                          $widgetId: "p.TaskTracker.TaskEdit.layoutGrid4",
                          class: "mx-name-layoutGrid4 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
                          style: void 0,
                          content: [
                            /* @__PURE__ */ React.createElement(
                              $Div,
                              {
                                key: "p.TaskTracker.TaskEdit.layoutGrid4$row0",
                                $widgetId: "p.TaskTracker.TaskEdit.layoutGrid4$row0",
                                class: "row align-children-center",
                                style: void 0,
                                content: [
                                  /* @__PURE__ */ React.createElement(
                                    $Div,
                                    {
                                      key: "p.TaskTracker.TaskEdit.layoutGrid4$row0$column0",
                                      $widgetId: "p.TaskTracker.TaskEdit.layoutGrid4$row0$column0",
                                      class: "col-lg-auto col-md col",
                                      style: void 0,
                                      content: [
                                        /* @__PURE__ */ React.createElement(
                                          $Image,
                                          {
                                            key: "p.TaskTracker.TaskEdit.image8",
                                            $widgetId: "p.TaskTracker.TaskEdit.image8",
                                            datasource: "image",
                                            imageObject: WebStaticImageProperty({
                                              "image": { "uri": "img/TaskTracker$Images$paperclip.png" }
                                            }),
                                            defaultImageDynamic: void 0,
                                            imageUrl: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            imageIcon: void 0,
                                            isBackgroundImage: false,
                                            children: void 0,
                                            onClickType: "action",
                                            onClick: void 0,
                                            alternativeText: selectTranslation([
                                              ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                              })
                                            ]),
                                            widthUnit: "pixels",
                                            width: 24,
                                            heightUnit: "pixels",
                                            height: 24,
                                            iconSize: 14,
                                            displayAs: "fullImage",
                                            responsive: false,
                                            class: "mx-name-image8",
                                            style: void 0,
                                            tabIndex: void 0
                                          }
                                        )
                                      ]
                                    }
                                  ),
                                  /* @__PURE__ */ React.createElement(
                                    $Div,
                                    {
                                      key: "p.TaskTracker.TaskEdit.layoutGrid4$row0$column1",
                                      $widgetId: "p.TaskTracker.TaskEdit.layoutGrid4$row0$column1",
                                      class: "col-lg col-md col",
                                      style: void 0,
                                      content: [
                                        /* @__PURE__ */ React.createElement(
                                          $Container,
                                          {
                                            key: "p.TaskTracker.TaskEdit.container42",
                                            $widgetId: "p.TaskTracker.TaskEdit.container42",
                                            class: "mx-name-container42",
                                            style: void 0,
                                            renderMode: "div",
                                            onClick: void 0,
                                            content: [
                                              /* @__PURE__ */ React.createElement(
                                                $ConditionalVisibilityWrapper,
                                                {
                                                  key: "p.TaskTracker.TaskEdit.actionButton5$visibility",
                                                  $widgetId: "p.TaskTracker.TaskEdit.actionButton5$visibility",
                                                  visible: ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Manager" }, { "type": "literal", "value": "Member" }] }, "args": {} }
                                                  }),
                                                  contents: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $ActionButton,
                                                      {
                                                        key: "p.TaskTracker.TaskEdit.actionButton5",
                                                        $widgetId: "p.TaskTracker.TaskEdit.actionButton5",
                                                        buttonId: "p.TaskTracker.TaskEdit.actionButton5",
                                                        class: "mx-name-actionButton5 d-block",
                                                        style: void 0,
                                                        tabIndex: void 0,
                                                        renderType: "link",
                                                        role: "button",
                                                        buttonClass: "btn-default",
                                                        caption: selectTranslation([
                                                          ExpressionProperty({
                                                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskEdit.listView1", "source": "object" } } }
                                                          })
                                                        ]),
                                                        tooltip: TextProperty({
                                                          "value": selectTranslation([
                                                            ""
                                                          ])
                                                        }),
                                                        icon: void 0,
                                                        action: ActionProperty({
                                                          "action": { "type": "callMicroflow", "argMap": { "FileUpload": { "widget": "p.TaskTracker.TaskEdit.listView1", "source": "object" } }, "config": { "operationId": "FopLWf8nAFWPakChMV9FZg", "validate": "view", "allowedRoles": ["Manager", "Member"] }, "disabledDuringExecution": true },
                                                          "abortOnServerValidation": true
                                                        })
                                                      }
                                                    )
                                                  ]
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $Text,
                                                {
                                                  key: "p.TaskTracker.TaskEdit.text39",
                                                  $widgetId: "p.TaskTracker.TaskEdit.text39",
                                                  class: "mx-name-text39 text-bold text-small",
                                                  style: void 0,
                                                  caption: selectTranslation([
                                                    ExpressionProperty({
                                                      "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TaskTracker.FileUpload_MendixSSOUser_Account/MendixSSO.MendixSSOUser/DisplayName" }, { "type": "literal", "value": "\r\n" }] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskEdit.listView1", "source": "object" } } }
                                                    })
                                                  ]),
                                                  renderMode: "span"
                                                }
                                              ),
                                              /* @__PURE__ */ React.createElement(
                                                $Text,
                                                {
                                                  key: "p.TaskTracker.TaskEdit.text38",
                                                  $widgetId: "p.TaskTracker.TaskEdit.text38",
                                                  class: "mx-name-text38 text-detail text-small",
                                                  style: void 0,
                                                  caption: selectTranslation([
                                                    ExpressionProperty({
                                                      "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "| " }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "createdDate" }, { "type": "literal", "value": '{"type":"custom","pattern":"EEE d MMM yyyy,  H:mm"}' }] }] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskEdit.listView1", "source": "object" } } }
                                                    })
                                                  ]),
                                                  renderMode: "span"
                                                }
                                              )
                                            ],
                                            ariaHidden: false
                                          }
                                        )
                                      ]
                                    }
                                  ),
                                  /* @__PURE__ */ React.createElement(
                                    $Div,
                                    {
                                      key: "p.TaskTracker.TaskEdit.layoutGrid4$row0$column2",
                                      $widgetId: "p.TaskTracker.TaskEdit.layoutGrid4$row0$column2",
                                      class: "col-lg-auto col-md col",
                                      style: void 0,
                                      content: [
                                        /* @__PURE__ */ React.createElement(
                                          $Container,
                                          {
                                            key: "p.TaskTracker.TaskEdit.container44",
                                            $widgetId: "p.TaskTracker.TaskEdit.container44",
                                            class: "mx-name-container44 pull-right",
                                            style: void 0,
                                            renderMode: "div",
                                            onClick: void 0,
                                            content: [
                                              /* @__PURE__ */ React.createElement(
                                                $ConditionalVisibilityWrapper,
                                                {
                                                  key: "p.TaskTracker.TaskEdit.actionButton6$visibility",
                                                  $widgetId: "p.TaskTracker.TaskEdit.actionButton6$visibility",
                                                  visible: ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Manager" }, { "type": "literal", "value": "Member" }] }, "args": {} }
                                                  }),
                                                  contents: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $ActionButton,
                                                      {
                                                        key: "p.TaskTracker.TaskEdit.actionButton6",
                                                        $widgetId: "p.TaskTracker.TaskEdit.actionButton6",
                                                        buttonId: "p.TaskTracker.TaskEdit.actionButton6",
                                                        class: "mx-name-actionButton6 text-small text-danger pull-right",
                                                        style: void 0,
                                                        tabIndex: void 0,
                                                        renderType: "link",
                                                        role: "button",
                                                        buttonClass: "btn-default",
                                                        caption: selectTranslation([
                                                          ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "Delete" }, "args": {} }
                                                          })
                                                        ]),
                                                        tooltip: TextProperty({
                                                          "value": selectTranslation([
                                                            ""
                                                          ])
                                                        }),
                                                        icon: void 0,
                                                        action: ActionProperty({
                                                          "action": { "type": "deleteObject", "argMap": { "$object": { "widget": "p.TaskTracker.TaskEdit.listView1", "source": "object" } }, "config": { "closePage": false, "operationId": "qOhWPYGmQVCeC1pk7KUWNw" }, "disabledDuringExecution": true },
                                                          "abortOnServerValidation": true
                                                        })
                                                      }
                                                    )
                                                  ]
                                                }
                                              )
                                            ],
                                            ariaHidden: false
                                          }
                                        )
                                      ]
                                    }
                                  )
                                ]
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }),
                  onClick: void 0,
                  pageSize: 10
                }
              ),
              /* @__PURE__ */ React.createElement(
                $DataView,
                {
                  key: "p.TaskTracker.TaskEdit.dataView3",
                  $widgetId: "p.TaskTracker.TaskEdit.dataView3",
                  class: "mx-name-dataView3 spacing-outer-bottom-medium form-vertical",
                  style: void 0,
                  tabIndex: void 0,
                  object: MicroflowObjectProperty({
                    "dataSourceId": "p.251",
                    "scope": "p.TaskTracker.TaskEdit.dataView1",
                    "editable": true,
                    "operationId": "N1EaFbG20VqGNCTLw7kq5w",
                    "argMap": { "Task": { "widget": "$Task", "source": "object" } }
                  }),
                  emptyMessage: TextProperty({
                    "value": selectTranslation([
                      ""
                    ])
                  }),
                  body: [
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.TaskTracker.TaskEdit.container1",
                        $widgetId: "p.TaskTracker.TaskEdit.container1",
                        class: "mx-name-container1 row-left",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.TaskTracker.TaskEdit.fileManager1$formGroup",
                              $widgetId: "p.TaskTracker.TaskEdit.fileManager1$formGroup",
                              class: "mx-fileinput mx-name-fileManager1 file-uploader mx-filemanager",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $FileManager,
                                  {
                                    key: "p.TaskTracker.TaskEdit.fileManager1",
                                    $widgetId: "p.TaskTracker.TaskEdit.fileManager1",
                                    upload: FileUploadProperty({
                                      "scope": "p.TaskTracker.TaskEdit.dataView3"
                                    }),
                                    showInBrowser: false,
                                    maxFileSize: 5,
                                    extensions: "",
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.TaskTracker.TaskEdit.fileManager1"
                                    })
                                  }
                                )
                              ],
                              caption: void 0,
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.TaskTracker.TaskEdit.fileManager1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.TaskTracker.TaskEdit.fileManager1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.TaskTracker.TaskEdit.actionButton4$visibility",
                              $widgetId: "p.TaskTracker.TaskEdit.actionButton4$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Manager" }, { "type": "literal", "value": "Member" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.TaskTracker.TaskEdit.actionButton4",
                                    $widgetId: "p.TaskTracker.TaskEdit.actionButton4",
                                    buttonId: "p.TaskTracker.TaskEdit.actionButton4",
                                    class: "mx-name-actionButton4 pull-right spacing-outer-bottom-medium spacing-outer-left",
                                    style: void 0,
                                    tabIndex: void 0,
                                    renderType: "button",
                                    role: void 0,
                                    buttonClass: "btn-default",
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Upload file" }, "args": {} }
                                      })
                                    ]),
                                    tooltip: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    icon: void 0,
                                    action: ActionProperty({
                                      "action": { "type": "callMicroflow", "argMap": { "FileUpload": { "widget": "p.TaskTracker.TaskEdit.dataView3", "source": "object" }, "Task": { "widget": "$Task", "source": "object" } }, "config": { "operationId": "Z0oaImDuXliEq2gu6qNoOQ", "validate": "view", "allowedRoles": ["Manager", "Member"] }, "disabledDuringExecution": true },
                                      "abortOnServerValidation": true
                                    })
                                  }
                                )
                              ]
                            }
                          )
                        ],
                        ariaHidden: false
                      }
                    )
                  ],
                  hideFooter: true,
                  footer: void 0
                }
              )
            ]
          }
        )
      ],
      hideFooter: false,
      footer: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.TaskTracker.TaskEdit.layoutGrid7",
            $widgetId: "p.TaskTracker.TaskEdit.layoutGrid7",
            class: "mx-name-layoutGrid7 mx-layoutgrid mx-layoutgrid-fluid container-fluid spacing-inner-left-none spacing-inner-right-none",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.TaskTracker.TaskEdit.layoutGrid7$row0",
                  $widgetId: "p.TaskTracker.TaskEdit.layoutGrid7$row0",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.TaskTracker.TaskEdit.layoutGrid7$row0$column0",
                        $widgetId: "p.TaskTracker.TaskEdit.layoutGrid7$row0$column0",
                        class: "col-lg col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.TaskTracker.TaskEdit.actionButton2",
                              $widgetId: "p.TaskTracker.TaskEdit.actionButton2",
                              buttonId: "p.TaskTracker.TaskEdit.actionButton2",
                              class: "mx-name-actionButton2 btn-block pull-right spacing-outer-bottom",
                              style: void 0,
                              tabIndex: void 0,
                              renderType: "button",
                              role: void 0,
                              buttonClass: "btn-default",
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Cancel changes" }, "args": {} }
                                })
                              ]),
                              tooltip: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              icon: void 0,
                              action: ActionProperty({
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "Q01jNMuagFK5vYEZvDxzlw", "closePage": true }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.TaskTracker.TaskEdit.layoutGrid7$row1",
                  $widgetId: "p.TaskTracker.TaskEdit.layoutGrid7$row1",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.TaskTracker.TaskEdit.layoutGrid7$row1$column0",
                        $widgetId: "p.TaskTracker.TaskEdit.layoutGrid7$row1$column0",
                        class: "col-lg col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.TaskTracker.TaskEdit.actionButton1$visibility",
                              $widgetId: "p.TaskTracker.TaskEdit.actionButton1$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Manager" }, { "type": "literal", "value": "Member" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.TaskTracker.TaskEdit.actionButton1",
                                    $widgetId: "p.TaskTracker.TaskEdit.actionButton1",
                                    buttonId: "p.TaskTracker.TaskEdit.actionButton1",
                                    class: "mx-name-actionButton1 btn-block spacing-outer-bottom",
                                    style: void 0,
                                    tabIndex: void 0,
                                    renderType: "button",
                                    role: void 0,
                                    buttonClass: "btn-primary",
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Save changes" }, "args": {} }
                                      })
                                    ]),
                                    tooltip: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    icon: void 0,
                                    action: ActionProperty({
                                      "action": { "type": "callMicroflow", "argMap": { "Task": { "widget": "$Task", "source": "object" } }, "config": { "operationId": "Gva+VP55a1GkZAZYWI8p6Q", "validate": "view", "allowedRoles": ["Manager", "Member"] }, "disabledDuringExecution": true },
                                      "abortOnServerValidation": true
                                    })
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ React.createElement(
                $ConditionalVisibilityWrapper,
                {
                  key: "p.TaskTracker.TaskEdit.layoutGrid7$row2$visibility",
                  $widgetId: "p.TaskTracker.TaskEdit.layoutGrid7$row2$visibility",
                  visible: ExpressionProperty({
                    "expression": { "expr": { "type": "function", "name": "not", "parameters": [{ "type": "function", "name": "isNew", "parameters": [{ "type": "variable", "variable": "currentObject" }] }] }, "args": { "currentObject": { "widget": "p.TaskTracker.TaskEdit.dataView1", "source": "object" } } }
                  }),
                  contents: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.TaskTracker.TaskEdit.layoutGrid7$row2",
                        $widgetId: "p.TaskTracker.TaskEdit.layoutGrid7$row2",
                        class: "row",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Div,
                            {
                              key: "p.TaskTracker.TaskEdit.layoutGrid7$row2$column0",
                              $widgetId: "p.TaskTracker.TaskEdit.layoutGrid7$row2$column0",
                              class: "col-lg col-md col",
                              style: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.TaskTracker.TaskEdit.microflowTrigger1$visibility",
                                    $widgetId: "p.TaskTracker.TaskEdit.microflowTrigger1$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Manager" }, { "type": "literal", "value": "Member" }] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p.TaskTracker.TaskEdit.microflowTrigger1",
                                          $widgetId: "p.TaskTracker.TaskEdit.microflowTrigger1",
                                          buttonId: "p.TaskTracker.TaskEdit.microflowTrigger1",
                                          class: "mx-name-microflowTrigger1 btn-block pull-right spacing-outer-bottom",
                                          style: void 0,
                                          tabIndex: void 0,
                                          renderType: "button",
                                          role: void 0,
                                          buttonClass: "btn-danger",
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Delete" }, "args": {} }
                                            })
                                          ]),
                                          tooltip: TextProperty({
                                            "value": selectTranslation([
                                              ""
                                            ])
                                          }),
                                          icon: void 0,
                                          action: ActionProperty({
                                            "action": { "type": "deleteObject", "argMap": { "$object": { "widget": "$Task", "source": "object" } }, "config": { "closePage": true, "operationId": "1aTTEb8oNliNxTtQjJlOPg" }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                          })
                                        }
                                      )
                                    ]
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  )
]);
const title = selectTranslation([
  "Task"
]);
const classes = "fullscreen mx-window-view";
const cancelChangesOperationId = "3/Nvt5ySDVqJORyB9CgATQ";
const style = {};
const content = {
  ...content$1,
  "TaskTracker.FullScreenPopup.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
