import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [FormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should call onSearch on keyup', () => {
    const onSearchMock = spyOn(component, 'onSearch');
    fixture.debugElement.query(By.css('#search')).triggerEventHandler('keyup', null);
    expect(onSearchMock).toHaveBeenCalled();
  });

  it('should emit search term on keyup', () => {
    const searchEmitMock = spyOn(component.search, 'emit');
    fixture.debugElement.query(By.css('#search')).triggerEventHandler('keyup', null);
    expect(searchEmitMock).toHaveBeenCalled();
  });

});
