import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexViewComponent } from './spacex-view.component';

describe('SpacexViewComponent', () => {
  let component: SpacexViewComponent;
  let fixture: ComponentFixture<SpacexViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpacexViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
