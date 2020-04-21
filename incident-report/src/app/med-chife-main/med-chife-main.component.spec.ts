import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedChifeMainComponent } from './med-chife-main.component';

describe('MedChifeMainComponent', () => {
  let component: MedChifeMainComponent;
  let fixture: ComponentFixture<MedChifeMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedChifeMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedChifeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
