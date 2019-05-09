import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    component.page = {
      pageNumber: 1,
      pageSize: 25,
      totalPages: 10
    }
    component.paginationConfiguration = { id: 'test' };
    component.debounceTime = 0;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('paging with buttons', () => {
    expect(component.page.pageNumber).toBe(1);
    component.previousPage();
    expect(component.page.pageNumber).toBe(1);
    component.nextPage();
    expect(component.page.pageNumber).toBe(2);
    component.previousPage();
    expect(component.page.pageNumber).toBe(1);
    component.page.pageNumber = 10;
    expect(component.page.pageNumber).toBe(10);
    component.nextPage();
    expect(component.page.pageNumber).toBe(10);
    component.previousPage();
    expect(component.page.pageNumber).toBe(9);
  });

  it('current page changed to empty', fakeAsync(() => {
    expect(component.page.pageNumber).toBe(1);
    component.valuechange(null);
    tick(1);
    expect(component.page.pageNumber).toBe(1);
  }));


  it('current page changed to zero', fakeAsync(() => {
    expect(component.page.pageNumber).toBe(1);
    component.valuechange(0);
    tick(1);
    expect(component.page.pageNumber).toBe(1);
  }));


  it('current page changed above max', fakeAsync(() => {

    component.valuechange(11);
    tick(1);
    expect(component.page.pageNumber).toBe(10);
  }));

  it('current page changed within range', fakeAsync(() => {
    component.valuechange(7);
    tick(1);
    expect(component.page.pageNumber).toBe(7);
  }));

});
