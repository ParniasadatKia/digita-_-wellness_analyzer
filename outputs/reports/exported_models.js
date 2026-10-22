// AUTO-GENERATED from trained scikit-learn RandomForest models.
// Each *_tree_N function is one decision tree, transpiled exactly
// (same thresholds/splits/leaf probabilities as the fitted Python model).
// The *_predict_proba function averages all trees, matching
// sklearn's RandomForestClassifier.predict_proba precisely.

function addictionRisk_tree_0(f) {
  if (f['log_screen_time'] <= 2.192212) {
    if (f['social_media_share'] <= 0.699351) {
      if (f['log_screen_time'] <= 1.946624) {
        if (f['daily_screen_time_hours'] <= 5.965000) {
          return [1.0, 0.0];
        } else {
          if (f['sleep_hours'] <= 7.080000) {
            return [0.5, 0.5];
          } else {
            return [1.0, 0.0];
          }
        }
      } else {
        if (f['sleep_hours'] <= 4.570000) {
          return [0.0, 1.0];
        } else {
          if (f['social_media_hours'] <= 4.010000) {
            if (f['sleep_deficit'] <= 1.155000) {
              return [0.5105973025048169, 0.48940269749518306];
            } else {
              return [0.6815068493150684, 0.3184931506849315];
            }
          } else {
            return [0.0, 1.0];
          }
        }
      }
    } else {
      if (f['social_media_hours'] <= 4.005000) {
        return [1.0, 0.0];
      } else {
        return [0.0, 1.0];
      }
    }
  } else {
    if (f['app_opens_per_day'] <= 179.500000) {
      if (f['screen_sleep_ratio'] <= 1.010612) {
        if (f['age'] <= 33.500000) {
          return [0.0, 1.0];
        } else {
          return [0.25, 0.75];
        }
      } else {
        return [0.0, 1.0];
      }
    } else {
      if (f['sleep_hours'] <= 5.515000) {
        return [0.16666666666666666, 0.8333333333333334];
      } else {
        return [0.0, 1.0];
      }
    }
  }
}

function addictionRisk_tree_1(f) {
  if (f['log_screen_time'] <= 2.192212) {
    if (f['notif_x_switch'] <= 7.067224) {
      if (f['social_media_share'] <= 0.668614) {
        if (f['weekend_screen_time'] <= 7.105000) {
          if (f['weekend_escalation'] <= 0.155322) {
            if (f['weekend_x_screen'] <= 0.795000) {
              return [0.9736842105263158, 0.02631578947368421];
            } else {
              return [0.75, 0.25];
            }
          } else {
            return [1.0, 0.0];
          }
        } else {
          if (f['log_screen_time'] <= 1.950897) {
            if (f['daily_screen_time_hours'] <= 5.975000) {
              return [1.0, 0.0];
            } else {
              return [0.9090909090909091, 0.09090909090909091];
            }
          } else {
            if (f['social_media_share'] <= 0.550605) {
              return [0.5271739130434783, 0.47282608695652173];
            } else {
              return [0.07006369426751592, 0.9299363057324841];
            }
          }
        }
      } else {
        if (f['social_media_share'] <= 0.861546) {
          if (f['notification_load_index'] <= 46.400850) {
            if (f['social_media_hours'] <= 4.005000) {
              return [1.0, 0.0];
            } else {
              return [0.0, 1.0];
            }
          } else {
            return [0.9230769230769231, 0.07692307692307693];
          }
        } else {
          if (f['app_opens_per_day'] <= 50.500000) {
            if (f['daily_screen_time_hours'] <= 3.650000) {
              return [0.4084507042253521, 0.5915492957746479];
            } else {
              return [0.040983606557377046, 0.9590163934426229];
            }
          } else {
            if (f['app_switch_index'] <= 40.382599) {
              return [0.03162055335968379, 0.9683794466403162];
            } else {
              return [0.3076923076923077, 0.6923076923076923];
            }
          }
        }
      }
    } else {
      if (f['social_media_share'] <= 0.975311) {
        if (f['log_screen_time'] <= 1.789256) {
          if (f['app_switch_index'] <= 34.696533) {
            if (f['weekend_screen_time'] <= 6.610000) {
              return [0.9879518072289156, 0.012048192771084338];
            } else {
              return [0.9074074074074074, 0.09259259259259259];
            }
          } else {
            return [1.0, 0.0];
          }
        } else {
          if (f['work_study_hours'] <= 3.700000) {
            if (f['social_media_hours'] <= 4.030000) {
              return [0.9090909090909091, 0.09090909090909091];
            } else {
              return [0.0, 1.0];
            }
          } else {
            if (f['daily_screen_time_hours'] <= 5.960000) {
              return [0.8888888888888888, 0.1111111111111111];
            } else {
              return [0.48, 0.52];
            }
          }
        }
      } else {
        if (f['log_screen_time'] <= 1.565481) {
          if (f['notification_load_index'] <= 28.063025) {
            return [0.75, 0.25];
          } else {
            if (f['screen_sleep_ratio'] <= 0.385104) {
              return [0.038461538461538464, 0.9615384615384616];
            } else {
              return [0.2706766917293233, 0.7293233082706767];
            }
          }
        } else {
          if (f['screen_sleep_ratio'] <= 0.802714) {
            return [0.0, 1.0];
          } else {
            if (f['stress_level_enc'] <= 1.500000) {
              return [0.0, 1.0];
            } else {
              return [0.125, 0.875];
            }
          }
        }
      }
    }
  } else {
    if (f['gaming_share'] <= 0.321147) {
      if (f['daily_screen_time_hours'] <= 8.005000) {
        if (f['age'] <= 31.500000) {
          return [0.0, 1.0];
        } else {
          return [0.16666666666666666, 0.8333333333333334];
        }
      } else {
        return [0.0, 1.0];
      }
    } else {
      if (f['daily_screen_time_hours'] <= 7.985000) {
        return [0.4, 0.6];
      } else {
        return [0.0, 1.0];
      }
    }
  }
}

function addictionRisk_tree_2(f) {
  if (f['weekend_escalation'] <= 0.341064) {
    if (f['social_media_hours'] <= 4.005000) {
      if (f['social_media_share'] <= 0.451591) {
        if (f['daily_screen_time_hours'] <= 7.975000) {
          if (f['daily_screen_time_hours'] <= 6.000000) {
            return [1.0, 0.0];
          } else {
            if (f['sleep_deficit'] <= 0.415000) {
              return [0.41621621621621624, 0.5837837837837838];
            } else {
              return [0.583916083916084, 0.4160839160839161];
            }
          }
        } else {
          if (f['log_screen_time'] <= 2.197780) {
            return [0.18181818181818182, 0.8181818181818182];
          } else {
            return [0.0, 1.0];
          }
        }
      } else {
        if (f['entertainment_share'] <= 0.897590) {
          if (f['social_media_hours'] <= 3.295000) {
            if (f['weekend_screen_time'] <= 7.690000) {
              return [0.9814814814814815, 0.018518518518518517];
            } else {
              return [0.7142857142857143, 0.2857142857142857];
            }
          } else {
            if (f['daily_screen_time_hours'] <= 7.895000) {
              return [0.5684210526315789, 0.43157894736842106];
            } else {
              return [0.0, 1.0];
            }
          }
        } else {
          if (f['log_screen_time'] <= 1.954441) {
            return [1.0, 0.0];
          } else {
            if (f['social_media_hours'] <= 3.545000) {
              return [0.375, 0.625];
            } else {
              return [0.7631578947368421, 0.23684210526315788];
            }
          }
        }
      }
    } else {
      return [0.0, 1.0];
    }
  } else {
    if (f['log_screen_time'] <= 1.969208) {
      if (f['gaming_hours'] <= 0.105000) {
        if (f['gender_enc'] <= 0.500000) {
          return [0.625, 0.375];
        } else {
          if (f['social_media_hours'] <= 4.600000) {
            return [0.6666666666666666, 0.3333333333333333];
          } else {
            return [0.0, 1.0];
          }
        }
      } else {
        if (f['screen_sleep_ratio'] <= 0.381485) {
          if (f['social_media_share'] <= 0.988710) {
            return [1.0, 0.0];
          } else {
            if (f['weekend_x_screen'] <= 1.980000) {
              return [0.375, 0.625];
            } else {
              return [0.0, 1.0];
            }
          }
        } else {
          if (f['social_media_hours'] <= 4.005000) {
            if (f['screen_sleep_ratio'] <= 1.030361) {
              return [0.9946452476572959, 0.00535475234270415];
            } else {
              return [0.8636363636363636, 0.13636363636363635];
            }
          } else {
            return [0.0, 1.0];
          }
        }
      }
    } else {
      if (f['entertainment_share'] <= 0.715040) {
        if (f['notifications_per_day'] <= 67.500000) {
          if (f['weekend_escalation'] <= 0.372572) {
            return [0.3333333333333333, 0.6666666666666666];
          } else {
            return [0.0, 1.0];
          }
        } else {
          if (f['app_opens_per_day'] <= 50.000000) {
            if (f['work_study_share'] <= 0.396550) {
              return [0.75, 0.25];
            } else {
              return [1.0, 0.0];
            }
          } else {
            if (f['weekend_escalation'] <= 0.361507) {
              return [0.23076923076923078, 0.7692307692307693];
            } else {
              return [0.6885245901639344, 0.3114754098360656];
            }
          }
        }
      } else {
        if (f['gaming_hours'] <= 2.985000) {
          if (f['social_media_hours'] <= 3.985000) {
            if (f['social_media_hours'] <= 3.255000) {
              return [0.0, 1.0];
            } else {
              return [0.6923076923076923, 0.3076923076923077];
            }
          } else {
            return [0.0, 1.0];
          }
        } else {
          if (f['work_study_hours'] <= 2.140000) {
            if (f['daily_screen_time_hours'] <= 6.545000) {
              return [0.16666666666666666, 0.8333333333333334];
            } else {
              return [0.8333333333333334, 0.16666666666666666];
            }
          } else {
            if (f['social_media_share'] <= 0.507238) {
              return [0.35294117647058826, 0.6470588235294118];
            } else {
              return [0.0, 1.0];
            }
          }
        }
      }
    }
  }
}

function addictionRisk_tree_3(f) {
  if (f['screen_sleep_ratio'] <= 0.961725) {
    if (f['social_media_share'] <= 0.831714) {
      if (f['screen_sleep_ratio'] <= 0.767451) {
        if (f['screen_sleep_ratio'] <= 0.667352) {
          if (f['notification_load_index'] <= 12.204729) {
            if (f['notifications_per_day'] <= 47.000000) {
              return [0.9814814814814815, 0.018518518518518517];
            } else {
              return [0.7142857142857143, 0.2857142857142857];
            }
          } else {
            if (f['weekend_escalation'] <= 0.192016) {
              return [0.9347826086956522, 0.06521739130434782];
            } else {
              return [0.9975550122249389, 0.0024449877750611247];
            }
          }
        } else {
          if (f['social_media_hours'] <= 4.020000) {
            if (f['sleep_hours'] <= 8.545000) {
              return [0.991701244813278, 0.008298755186721992];
            } else {
              return [0.48148148148148145, 0.5185185185185185];
            }
          } else {
            return [0.0, 1.0];
          }
        }
      } else {
        if (f['sleep_hours'] <= 7.410000) {
          if (f['stress_x_screen'] <= 11.920000) {
            if (f['screen_sleep_ratio'] <= 0.909025) {
              return [0.958139534883721, 0.04186046511627907];
            } else {
              return [0.6702127659574468, 0.32978723404255317];
            }
          } else {
            if (f['social_media_share'] <= 0.446284) {
              return [0.9333333333333333, 0.06666666666666667];
            } else {
              return [0.06666666666666667, 0.9333333333333333];
            }
          }
        } else {
          if (f['gaming_hours'] <= 1.310000) {
            if (f['app_opens_per_day'] <= 95.000000) {
              return [0.225, 0.775];
            } else {
              return [0.06, 0.94];
            }
          } else {
            if (f['log_screen_time'] <= 2.177021) {
              return [0.4039408866995074, 0.5960591133004927];
            } else {
              return [0.04, 0.96];
            }
          }
        }
      }
    } else {
      if (f['sleep_deficit'] <= 2.450000) {
        if (f['daily_screen_time_hours'] <= 4.615000) {
          if (f['app_opens_per_day'] <= 28.500000) {
            if (f['weekend_screen_time'] <= 5.680000) {
              return [0.6363636363636364, 0.36363636363636365];
            } else {
              return [0.19047619047619047, 0.8095238095238095];
            }
          } else {
            if (f['social_media_share'] <= 0.996124) {
              return [0.7831325301204819, 0.21686746987951808];
            } else {
              return [0.10571428571428572, 0.8942857142857142];
            }
          }
        } else {
          return [0.0, 1.0];
        }
      } else {
        if (f['social_media_share'] <= 0.986686) {
          return [1.0, 0.0];
        } else {
          if (f['academic_work_impact_enc'] <= 0.500000) {
            if (f['gaming_share'] <= 0.539433) {
              return [0.0, 1.0];
            } else {
              return [0.2857142857142857, 0.7142857142857143];
            }
          } else {
            if (f['app_opens_per_day'] <= 116.000000) {
              return [0.7142857142857143, 0.2857142857142857];
            } else {
              return [0.5, 0.5];
            }
          }
        }
      }
    }
  } else {
    if (f['log_screen_time'] <= 2.194443) {
      if (f['daily_screen_time_hours'] <= 5.975000) {
        if (f['entertainment_share'] <= 0.999148) {
          if (f['screen_sleep_ratio'] <= 1.233397) {
            if (f['social_media_hours'] <= 3.715000) {
              return [1.0, 0.0];
            } else {
              return [0.3333333333333333, 0.6666666666666666];
            }
          } else {
            return [0.6666666666666666, 0.3333333333333333];
          }
        } else {
          if (f['gaming_share'] <= 0.626028) {
            if (f['social_media_hours'] <= 4.000000) {
              return [1.0, 0.0];
            } else {
              return [0.0, 1.0];
            }
          } else {
            if (f['screen_sleep_ratio'] <= 0.995789) {
              return [0.2857142857142857, 0.7142857142857143];
            } else {
              return [0.95, 0.05];
            }
          }
        }
      } else {
        if (f['weekend_escalation'] <= 0.391776) {
          if (f['entertainment_share'] <= 0.756388) {
            if (f['app_switch_index'] <= 5.064922) {
              return [0.30864197530864196, 0.691358024691358];
            } else {
              return [0.5242165242165242, 0.4757834757834758];
            }
          } else {
            if (f['social_media_share'] <= 0.517185) {
              return [0.49411764705882355, 0.5058823529411764];
            } else {
              return [0.023166023166023165, 0.9768339768339769];
            }
          }
        } else {
          if (f['entertainment_share'] <= 0.883516) {
            if (f['sleep_deficit'] <= 1.080000) {
              return [0.3333333333333333, 0.6666666666666666];
            } else {
              return [0.9428571428571428, 0.05714285714285714];
            }
          } else {
            if (f['weekend_screen_time'] <= 9.000000) {
              return [0.3333333333333333, 0.6666666666666666];
            } else {
              return [0.0, 1.0];
            }
          }
        }
      }
    } else {
      if (f['work_study_share'] <= 0.675397) {
        return [0.0, 1.0];
      } else {
        if (f['work_study_share'] <= 0.685712) {
          return [0.25, 0.75];
        } else {
          return [0.0, 1.0];
        }
      }
    }
  }
}

function addictionRisk_tree_4(f) {
  if (f['daily_screen_time_hours'] <= 7.975000) {
    if (f['log_screen_time'] <= 1.946624) {
      if (f['screen_sleep_ratio'] <= 0.381238) {
        if (f['weekend_screen_time'] <= 5.480000) {
          if (f['age'] <= 24.000000) {
            if (f['weekend_x_screen'] <= 1.090000) {
              return [0.14285714285714285, 0.8571428571428571];
            } else {
              return [1.0, 0.0];
            }
          } else {
            if (f['weekend_screen_time'] <= 4.830000) {
              return [0.4, 0.6];
            } else {
              return [0.0, 1.0];
            }
          }
        } else {
          return [0.0, 1.0];
        }
      } else {
        if (f['entertainment_share'] <= 0.999022) {
          if (f['gaming_share'] <= 0.170756) {
            if (f['log_screen_time'] <= 1.774951) {
              return [0.9702970297029703, 0.0297029702970297];
            } else {
              return [0.7103448275862069, 0.2896551724137931];
            }
          } else {
            if (f['daily_screen_time_hours'] <= 5.965000) {
              return [0.9941060903732809, 0.005893909626719057];
            } else {
              return [0.8, 0.2];
            }
          }
        } else {
          if (f['social_media_hours'] <= 4.005000) {
            return [1.0, 0.0];
          } else {
            return [0.0, 1.0];
          }
        }
      }
    } else {
      if (f['entertainment_share'] <= 0.686974) {
        if (f['screen_sleep_ratio'] <= 1.066392) {
          if (f['work_study_share'] <= 0.593369) {
            if (f['productivity_share'] <= 0.569938) {
              return [0.514792899408284, 0.48520710059171596];
            } else {
              return [1.0, 0.0];
            }
          } else {
            if (f['screen_sleep_ratio'] <= 0.774999) {
              return [0.9, 0.1];
            } else {
              return [0.17142857142857143, 0.8285714285714286];
            }
          }
        } else {
          if (f['notification_load_index'] <= 21.664387) {
            if (f['age'] <= 34.500000) {
              return [0.7710843373493976, 0.2289156626506024];
            } else {
              return [0.42857142857142855, 0.5714285714285714];
            }
          } else {
            if (f['productivity_share'] <= 0.160618) {
              return [0.058823529411764705, 0.9411764705882353];
            } else {
              return [0.5975609756097561, 0.4024390243902439];
            }
          }
        }
      } else {
        if (f['entertainment_share'] <= 0.867576) {
          if (f['gaming_hours'] <= 1.905000) {
            if (f['daily_screen_time_hours'] <= 6.575000) {
              return [0.41935483870967744, 0.5806451612903226];
            } else {
              return [0.02912621359223301, 0.970873786407767];
            }
          } else {
            if (f['sleep_hours'] <= 5.225000) {
              return [0.19047619047619047, 0.8095238095238095];
            } else {
              return [0.5714285714285714, 0.42857142857142855];
            }
          }
        } else {
          if (f['notification_load_index'] <= 24.120370) {
            if (f['age'] <= 22.500000) {
              return [0.14736842105263157, 0.8526315789473684];
            } else {
              return [0.017543859649122806, 0.9824561403508771];
            }
          } else {
            if (f['notification_load_index'] <= 25.406426) {
              return [0.47058823529411764, 0.5294117647058824];
            } else {
              return [0.14705882352941177, 0.8529411764705882];
            }
          }
        }
      }
    }
  } else {
    if (f['log_screen_time'] <= 2.197780) {
      if (f['social_media_hours'] <= 3.730000) {
        return [0.5, 0.5];
      } else {
        return [0.0, 1.0];
      }
    } else {
      return [0.0, 1.0];
    }
  }
}

function addictionRisk_tree_5(f) {
  if (f['daily_screen_time_hours'] <= 7.925000) {
    if (f['social_media_share'] <= 0.718175) {
      if (f['screen_sleep_ratio'] <= 0.775327) {
        if (f['daily_screen_time_hours'] <= 6.325000) {
          if (f['daily_screen_time_hours'] <= 5.925000) {
            return [1.0, 0.0];
          } else {
            if (f['sleep_hours'] <= 8.370000) {
              return [1.0, 0.0];
            } else {
              return [0.5, 0.5];
            }
          }
        } else {
          if (f['app_switch_index'] <= 22.971894) {
            if (f['log_screen_time'] <= 2.011564) {
              return [0.2857142857142857, 0.7142857142857143];
            } else {
              return [0.0, 1.0];
            }
          } else {
            return [0.6923076923076923, 0.3076923076923077];
          }
        }
      } else {
        if (f['social_media_share'] <= 0.557890) {
          if (f['daily_screen_time_hours'] <= 6.015000) {
            return [1.0, 0.0];
          } else {
            if (f['work_study_hours'] <= 5.665000) {
              return [0.5455820476858345, 0.4544179523141655];
            } else {
              return [0.2558139534883721, 0.7441860465116279];
            }
          }
        } else {
          if (f['productivity_share'] <= 0.826702) {
            if (f['social_media_hours'] <= 4.010000) {
              return [0.8205128205128205, 0.1794871794871795];
            } else {
              return [0.0, 1.0];
            }
          } else {
            if (f['daily_screen_time_hours'] <= 5.960000) {
              return [1.0, 0.0];
            } else {
              return [0.0, 1.0];
            }
          }
        }
      }
    } else {
      if (f['social_media_hours'] <= 4.005000) {
        return [1.0, 0.0];
      } else {
        return [0.0, 1.0];
      }
    }
  } else {
    if (f['daily_screen_time_hours'] <= 7.975000) {
      if (f['weekend_x_screen'] <= 2.675000) {
        if (f['notif_x_switch'] <= 1.232460) {
          return [0.3333333333333333, 0.6666666666666666];
        } else {
          return [0.0, 1.0];
        }
      } else {
        return [0.5, 0.5];
      }
    } else {
      if (f['app_opens_per_day'] <= 179.500000) {
        if (f['productivity_share'] <= 0.679928) {
          return [0.0, 1.0];
        } else {
          if (f['productivity_share'] <= 0.689129) {
            return [0.16666666666666666, 0.8333333333333334];
          } else {
            return [0.0, 1.0];
          }
        }
      } else {
        if (f['entertainment_share'] <= 0.403863) {
          return [0.0, 1.0];
        } else {
          return [0.16666666666666666, 0.8333333333333334];
        }
      }
    }
  }
}

function addictionRisk_tree_6(f) {
  if (f['productivity_share'] <= 0.644908) {
    if (f['screen_sleep_ratio'] <= 0.961459) {
      if (f['entertainment_share'] <= 0.971826) {
        if (f['social_media_hours'] <= 3.985000) {
          if (f['log_screen_time'] <= 1.946624) {
            return [1.0, 0.0];
          } else {
            if (f['daily_screen_time_hours'] <= 7.960000) {
              return [0.5808383233532934, 0.41916167664670656];
            } else {
              return [0.0, 1.0];
            }
          }
        } else {
          if (f['weekend_screen_time'] <= 6.780000) {
            return [0.25, 0.75];
          } else {
            return [0.0, 1.0];
          }
        }
      } else {
        if (f['weekend_screen_time'] <= 7.825000) {
          if (f['productivity_share'] <= 0.130759) {
            return [0.9166666666666666, 0.08333333333333333];
          } else {
            if (f['age'] <= 27.500000) {
              return [0.4146341463414634, 0.5853658536585366];
            } else {
              return [0.5359116022099447, 0.46408839779005523];
            }
          }
        } else {
          if (f['social_media_hours'] <= 4.065000) {
            return [0.375, 0.625];
          } else {
            return [0.0, 1.0];
          }
        }
      }
    } else {
      if (f['daily_screen_time_hours'] <= 7.975000) {
        if (f['log_screen_time'] <= 1.945195) {
          if (f['social_media_hours'] <= 4.040000) {
            return [1.0, 0.0];
          } else {
            return [0.0, 1.0];
          }
        } else {
          if (f['entertainment_share'] <= 0.867576) {
            if (f['social_media_share'] <= 0.550605) {
              return [0.5571847507331378, 0.44281524926686217];
            } else {
              return [0.03773584905660377, 0.9622641509433962];
            }
          } else {
            if (f['social_media_share'] <= 0.543539) {
              return [0.38235294117647056, 0.6176470588235294];
            } else {
              return [0.0058823529411764705, 0.9941176470588236];
            }
          }
        }
      } else {
        if (f['weekend_escalation'] <= 0.257966) {
          return [0.0, 1.0];
        } else {
          if (f['age'] <= 32.500000) {
            return [0.0, 1.0];
          } else {
            if (f['social_media_hours'] <= 1.485000) {
              return [0.1, 0.9];
            } else {
              return [0.0, 1.0];
            }
          }
        }
      }
    }
  } else {
    if (f['log_screen_time'] <= 1.950186) {
      if (f['social_media_share'] <= 0.818920) {
        if (f['daily_screen_time_hours'] <= 5.080000) {
          return [1.0, 0.0];
        } else {
          if (f['age'] <= 19.500000) {
            if (f['social_media_hours'] <= 4.000000) {
              return [1.0, 0.0];
            } else {
              return [0.0, 1.0];
            }
          } else {
            if (f['weekend_screen_time'] <= 6.065000) {
              return [0.7142857142857143, 0.2857142857142857];
            } else {
              return [0.9636363636363636, 0.03636363636363636];
            }
          }
        }
      } else {
        if (f['social_media_hours'] <= 4.005000) {
          return [1.0, 0.0];
        } else {
          return [0.0, 1.0];
        }
      }
    } else {
      if (f['entertainment_share'] <= 0.787299) {
        if (f['stress_x_screen'] <= 15.950000) {
          if (f['notifications_per_day'] <= 32.500000) {
            if (f['gaming_hours'] <= 2.360000) {
              return [1.0, 0.0];
            } else {
              return [0.8571428571428571, 0.14285714285714285];
            }
          } else {
            if (f['stress_x_screen'] <= 10.610000) {
              return [0.40268456375838924, 0.5973154362416108];
            } else {
              return [0.7, 0.3];
            }
          }
        } else {
          return [0.0, 1.0];
        }
      } else {
        if (f['gaming_hours'] <= 2.945000) {
          return [0.0, 1.0];
        } else {
          if (f['gaming_hours'] <= 3.185000) {
            if (f['social_media_share'] <= 0.590849) {
              return [1.0, 0.0];
            } else {
              return [0.14285714285714285, 0.8571428571428571];
            }
          } else {
            if (f['gaming_share'] <= 0.578041) {
              return [0.0, 1.0];
            } else {
              return [0.4375, 0.5625];
            }
          }
        }
      }
    }
  }
}

function addictionRisk_tree_7(f) {
  if (f['entertainment_share'] <= 0.593277) {
    if (f['weekend_screen_time'] <= 8.815000) {
      if (f['screen_sleep_ratio'] <= 0.878590) {
        if (f['log_screen_time'] <= 1.976133) {
          if (f['log_screen_time'] <= 1.943765) {
            return [1.0, 0.0];
          } else {
            return [0.8888888888888888, 0.1111111111111111];
          }
        } else {
          if (f['social_media_hours'] <= 1.065000) {
            return [0.6153846153846154, 0.38461538461538464];
          } else {
            return [0.14285714285714285, 0.8571428571428571];
          }
        }
      } else {
        if (f['sleep_hours'] <= 5.885000) {
          if (f['weekend_screen_time'] <= 7.720000) {
            return [1.0, 0.0];
          } else {
            if (f['app_opens_per_day'] <= 130.500000) {
              return [0.7619047619047619, 0.23809523809523808];
            } else {
              return [0.125, 0.875];
            }
          }
        } else {
          if (f['entertainment_share'] <= 0.476484) {
            if (f['weekend_x_screen'] <= 1.240000) {
              return [0.5625, 0.4375];
            } else {
              return [0.9090909090909091, 0.09090909090909091];
            }
          } else {
            if (f['notif_x_switch'] <= 4.226625) {
              return [0.13953488372093023, 0.8604651162790697];
            } else {
              return [0.5384615384615384, 0.46153846153846156];
            }
          }
        }
      }
    } else {
      if (f['weekend_screen_time'] <= 10.125000) {
        if (f['log_screen_time'] <= 2.197222) {
          if (f['weekend_screen_time'] <= 9.250000) {
            if (f['work_study_hours'] <= 1.440000) {
              return [0.0, 1.0];
            } else {
              return [0.5, 0.5];
            }
          } else {
            if (f['productivity_share'] <= 0.283093) {
              return [0.5555555555555556, 0.4444444444444444];
            } else {
              return [0.8611111111111112, 0.1388888888888889];
            }
          }
        } else {
          return [0.0, 1.0];
        }
      } else {
        if (f['weekend_escalation'] <= 0.354220) {
          if (f['social_media_hours'] <= 2.235000) {
            if (f['app_opens_per_day'] <= 22.500000) {
              return [0.08, 0.92];
            } else {
              return [0.0030581039755351682, 0.9969418960244648];
            }
          } else {
            return [0.0, 1.0];
          }
        } else {
          if (f['weekend_x_screen'] <= 2.895000) {
            return [1.0, 0.0];
          } else {
            return [0.2857142857142857, 0.7142857142857143];
          }
        }
      }
    }
  } else {
    if (f['social_media_hours'] <= 4.005000) {
      if (f['notification_load_index'] <= 28.591663) {
        if (f['entertainment_share'] <= 0.802480) {
          if (f['daily_screen_time_hours'] <= 7.930000) {
            if (f['stress_x_screen'] <= 13.720000) {
              return [0.7601351351351351, 0.23986486486486486];
            } else {
              return [0.3877551020408163, 0.6122448979591837];
            }
          } else {
            return [0.0, 1.0];
          }
        } else {
          if (f['daily_screen_time_hours'] <= 6.005000) {
            return [1.0, 0.0];
          } else {
            if (f['gaming_hours'] <= 3.235000) {
              return [0.62, 0.38];
            } else {
              return [0.29213483146067415, 0.7078651685393258];
            }
          }
        }
      } else {
        if (f['app_switch_index'] <= 27.463337) {
          if (f['academic_work_impact_enc'] <= 0.500000) {
            if (f['log_screen_time'] <= 2.071259) {
              return [0.9954337899543378, 0.0045662100456621];
            } else {
              return [0.7272727272727273, 0.2727272727272727];
            }
          } else {
            if (f['screen_sleep_ratio'] <= 0.959776) {
              return [0.9606741573033708, 0.03932584269662921];
            } else {
              return [0.6111111111111112, 0.3888888888888889];
            }
          }
        } else {
          return [1.0, 0.0];
        }
      }
    } else {
      return [0.0, 1.0];
    }
  }
}

function addictionRisk_tree_8(f) {
  if (f['log_screen_time'] <= 2.188856) {
    if (f['social_media_hours'] <= 4.005000) {
      if (f['screen_sleep_ratio'] <= 0.784570) {
        if (f['app_switch_index'] <= 2.976388) {
          return [0.625, 0.375];
        } else {
          if (f['log_screen_time'] <= 1.946624) {
            return [1.0, 0.0];
          } else {
            if (f['weekend_x_screen'] <= 1.975000) {
              return [0.5428571428571428, 0.45714285714285713];
            } else {
              return [0.7692307692307693, 0.23076923076923078];
            }
          }
        }
      } else {
        if (f['entertainment_share'] <= 0.830626) {
          if (f['daily_screen_time_hours'] <= 6.015000) {
            return [1.0, 0.0];
          } else {
            if (f['notification_load_index'] <= 18.837923) {
              return [0.5896551724137931, 0.4103448275862069];
            } else {
              return [0.3900709219858156, 0.6099290780141844];
            }
          }
        } else {
          if (f['low_sleep'] <= 0.500000) {
            if (f['work_study_hours'] <= 1.700000) {
              return [0.3, 0.7];
            } else {
              return [0.8181818181818182, 0.18181818181818182];
            }
          } else {
            if (f['stress_x_screen'] <= 11.980000) {
              return [0.9704433497536946, 0.029556650246305417];
            } else {
              return [0.5454545454545454, 0.45454545454545453];
            }
          }
        }
      }
    } else {
      return [0.0, 1.0];
    }
  } else {
    if (f['gender_enc'] <= 1.500000) {
      if (f['screen_sleep_ratio'] <= 1.010612) {
        if (f['notif_x_switch'] <= 1.129469) {
          if (f['app_switch_index'] <= 7.920506) {
            return [0.0, 1.0];
          } else {
            return [0.5, 0.5];
          }
        } else {
          return [0.0, 1.0];
        }
      } else {
        if (f['daily_screen_time_hours'] <= 7.990000) {
          if (f['notifications_per_day'] <= 104.500000) {
            return [0.2, 0.8];
          } else {
            return [0.0, 1.0];
          }
        } else {
          return [0.0, 1.0];
        }
      }
    } else {
      if (f['productivity_share'] <= 0.690692) {
        if (f['weekend_escalation'] <= 0.239616) {
          if (f['gaming_hours'] <= 0.295000) {
            if (f['app_switch_index'] <= 13.391708) {
              return [0.0, 1.0];
            } else {
              return [0.125, 0.875];
            }
          } else {
            return [0.0, 1.0];
          }
        } else {
          if (f['daily_screen_time_hours'] <= 8.010000) {
            return [0.4666666666666667, 0.5333333333333333];
          } else {
            return [0.0, 1.0];
          }
        }
      } else {
        return [0.25, 0.75];
      }
    }
  }
}

function addictionRisk_tree_9(f) {
  if (f['log_screen_time'] <= 2.195556) {
    if (f['notification_load_index'] <= 35.052679) {
      if (f['gaming_share'] <= 0.748893) {
        if (f['entertainment_share'] <= 0.999022) {
          if (f['weekend_escalation'] <= 0.427372) {
            if (f['social_media_share'] <= 0.557312) {
              return [0.6382536382536382, 0.36174636174636177];
            } else {
              return [0.26174496644295303, 0.738255033557047];
            }
          } else {
            if (f['daily_screen_time_hours'] <= 5.950000) {
              return [0.9668874172185431, 0.033112582781456956];
            } else {
              return [0.5483870967741935, 0.45161290322580644];
            }
          }
        } else {
          if (f['daily_screen_time_hours'] <= 5.315000) {
            if (f['social_media_hours'] <= 4.005000) {
              return [1.0, 0.0];
            } else {
              return [0.0, 1.0];
            }
          } else {
            if (f['log_screen_time'] <= 2.003505) {
              return [0.1735159817351598, 0.8264840182648402];
            } else {
              return [0.028985507246376812, 0.9710144927536232];
            }
          }
        }
      } else {
        if (f['productivity_share'] <= 0.972145) {
          if (f['social_media_hours'] <= 4.040000) {
            return [1.0, 0.0];
          } else {
            return [0.0, 1.0];
          }
        } else {
          if (f['notifications_per_day'] <= 47.500000) {
            if (f['social_media_hours'] <= 3.790000) {
              return [1.0, 0.0];
            } else {
              return [0.0, 1.0];
            }
          } else {
            if (f['screen_sleep_ratio'] <= 0.561091) {
              return [0.9375, 0.0625];
            } else {
              return [0.6363636363636364, 0.36363636363636365];
            }
          }
        }
      }
    } else {
      if (f['social_media_hours'] <= 4.005000) {
        if (f['log_screen_time'] <= 1.950897) {
          return [1.0, 0.0];
        } else {
          if (f['weekend_x_screen'] <= 2.380000) {
            if (f['weekend_escalation'] <= 0.120572) {
              return [0.7142857142857143, 0.2857142857142857];
            } else {
              return [0.9565217391304348, 0.043478260869565216];
            }
          } else {
            return [0.5714285714285714, 0.42857142857142855];
          }
        }
      } else {
        return [0.0, 1.0];
      }
    }
  } else {
    return [0.0, 1.0];
  }
}

function addictionRisk_tree_10(f) {
  if (f['notif_x_switch'] <= 4.115602) {
    if (f['weekend_screen_time'] <= 9.485000) {
      if (f['daily_screen_time_hours'] <= 6.005000) {
        if (f['stress_level_enc'] <= 0.500000) {
          if (f['social_media_share'] <= 0.852950) {
            if (f['work_study_hours'] <= 5.860000) {
              return [0.9841269841269841, 0.015873015873015872];
            } else {
              return [0.7272727272727273, 0.2727272727272727];
            }
          } else {
            if (f['log_screen_time'] <= 1.695614) {
              return [0.3448275862068966, 0.6551724137931034];
            } else {
              return [0.0, 1.0];
            }
          }
        } else {
          if (f['social_media_hours'] <= 3.985000) {
            return [1.0, 0.0];
          } else {
            return [0.0, 1.0];
          }
        }
      } else {
        if (f['social_media_hours'] <= 4.005000) {
          if (f['log_screen_time'] <= 2.194443) {
            if (f['daily_screen_time_hours'] <= 7.380000) {
              return [0.5230769230769231, 0.47692307692307695];
            } else {
              return [0.7247706422018348, 0.27522935779816515];
            }
          } else {
            return [0.0, 1.0];
          }
        } else {
          return [0.0, 1.0];
        }
      }
    } else {
      if (f['productivity_share'] <= 0.724600) {
        if (f['weekend_escalation'] <= 0.354346) {
          if (f['gaming_share'] <= 0.455264) {
            if (f['daily_screen_time_hours'] <= 8.005000) {
              return [0.22758620689655173, 0.7724137931034483];
            } else {
              return [0.0, 1.0];
            }
          } else {
            if (f['daily_screen_time_hours'] <= 8.005000) {
              return [0.29411764705882354, 0.7058823529411765];
            } else {
              return [0.0, 1.0];
            }
          }
        } else {
          if (f['notif_x_switch'] <= 2.882025) {
            if (f['notif_x_switch'] <= 2.409947) {
              return [0.26436781609195403, 0.735632183908046];
            } else {
              return [0.8571428571428571, 0.14285714285714285];
            }
          } else {
            if (f['academic_work_impact_enc'] <= 0.500000) {
              return [0.1111111111111111, 0.8888888888888888];
            } else {
              return [0.0, 1.0];
            }
          }
        }
      } else {
        if (f['app_switch_index'] <= 13.508048) {
          return [0.6923076923076923, 0.3076923076923077];
        } else {
          return [0.0, 1.0];
        }
      }
    }
  } else {
    if (f['social_media_hours'] <= 4.005000) {
      if (f['productivity_share'] <= 0.117679) {
        if (f['gaming_hours'] <= 2.585000) {
          return [0.0, 1.0];
        } else {
          return [0.25, 0.75];
        }
      } else {
        if (f['log_screen_time'] <= 1.960799) {
          if (f['screen_sleep_ratio'] <= 1.255690) {
            if (f['log_screen_time'] <= 1.945909) {
              return [1.0, 0.0];
            } else {
              return [0.875, 0.125];
            }
          } else {
            return [0.75, 0.25];
          }
        } else {
          if (f['weekend_escalation'] <= 0.312779) {
            if (f['age'] <= 34.500000) {
              return [0.3191489361702128, 0.6808510638297872];
            } else {
              return [0.7368421052631579, 0.2631578947368421];
            }
          } else {
            if (f['weekend_screen_time'] <= 9.000000) {
              return [0.9375, 0.0625];
            } else {
              return [0.5625, 0.4375];
            }
          }
        }
      }
    } else {
      return [0.0, 1.0];
    }
  }
}

function addictionRisk_tree_11(f) {
  if (f['social_media_hours'] <= 4.005000) {
    if (f['daily_screen_time_hours'] <= 7.955000) {
      if (f['screen_sleep_ratio'] <= 0.785992) {
        if (f['log_screen_time'] <= 1.951607) {
          return [1.0, 0.0];
        } else {
          if (f['notif_x_switch'] <= 5.217514) {
            if (f['notif_x_switch'] <= 1.175493) {
              return [0.1875, 0.8125];
            } else {
              return [0.5, 0.5];
            }
          } else {
            return [1.0, 0.0];
          }
        }
      } else {
        if (f['notif_x_switch'] <= 6.697612) {
          if (f['notifications_per_day'] <= 133.500000) {
            if (f['weekend_escalation'] <= 0.120087) {
              return [0.5192307692307693, 0.4807692307692308];
            } else {
              return [0.7718253968253969, 0.22817460317460317];
            }
          } else {
            if (f['daily_screen_time_hours'] <= 6.175000) {
              return [0.9666666666666667, 0.03333333333333333];
            } else {
              return [0.4720670391061452, 0.5279329608938548];
            }
          }
        } else {
          if (f['weekend_screen_time'] <= 8.685000) {
            if (f['weekend_screen_time'] <= 7.135000) {
              return [1.0, 0.0];
            } else {
              return [0.9298245614035088, 0.07017543859649122];
            }
          } else {
            return [0.2857142857142857, 0.7142857142857143];
          }
        }
      }
    } else {
      if (f['daily_screen_time_hours'] <= 7.975000) {
        return [0.3333333333333333, 0.6666666666666666];
      } else {
        if (f['log_screen_time'] <= 2.197222) {
          return [0.125, 0.875];
        } else {
          return [0.0, 1.0];
        }
      }
    }
  } else {
    return [0.0, 1.0];
  }
}

function addictionRisk_tree_12(f) {
  if (f['log_screen_time'] <= 2.188856) {
    if (f['screen_sleep_ratio'] <= 0.904874) {
      if (f['entertainment_share'] <= 0.999022) {
        if (f['stress_x_screen'] <= 12.610000) {
          if (f['stress_x_screen'] <= 7.390000) {
            if (f['social_media_hours'] <= 3.990000) {
              return [0.9007936507936508, 0.0992063492063492];
            } else {
              return [0.0, 1.0];
            }
          } else {
            if (f['gaming_hours'] <= 0.575000) {
              return [0.9019607843137255, 0.09803921568627451];
            } else {
              return [0.994535519125683, 0.00546448087431694];
            }
          }
        } else {
          if (f['screen_sleep_ratio'] <= 0.852908) {
            if (f['academic_work_impact_enc'] <= 0.500000) {
              return [0.3333333333333333, 0.6666666666666666];
            } else {
              return [0.0, 1.0];
            }
          } else {
            if (f['daily_screen_time_hours'] <= 7.635000) {
              return [0.75, 0.25];
            } else {
              return [0.0, 1.0];
            }
          }
        }
      } else {
        if (f['notification_load_index'] <= 44.049053) {
          if (f['social_media_share'] <= 0.723728) {
            if (f['gaming_share'] <= 0.583668) {
              return [0.7252747252747253, 0.27472527472527475];
            } else {
              return [0.9776119402985075, 0.022388059701492536];
            }
          } else {
            if (f['social_media_hours'] <= 4.005000) {
              return [1.0, 0.0];
            } else {
              return [0.0, 1.0];
            }
          }
        } else {
          if (f['gaming_share'] <= 0.293796) {
            if (f['weekend_screen_time'] <= 5.770000) {
              return [0.3076923076923077, 0.6923076923076923];
            } else {
              return [0.0, 1.0];
            }
          } else {
            if (f['log_screen_time'] <= 1.694694) {
              return [0.6618705035971223, 0.3381294964028777];
            } else {
              return [0.34782608695652173, 0.6521739130434783];
            }
          }
        }
      }
    } else {
      if (f['entertainment_share'] <= 0.875975) {
        if (f['daily_screen_time_hours'] <= 6.010000) {
          if (f['work_study_hours'] <= 5.585000) {
            if (f['low_sleep'] <= 0.500000) {
              return [0.8333333333333334, 0.16666666666666666];
            } else {
              return [1.0, 0.0];
            }
          } else {
            return [0.8571428571428571, 0.14285714285714285];
          }
        } else {
          if (f['social_media_hours'] <= 3.885000) {
            if (f['work_study_hours'] <= 1.355000) {
              return [0.3137254901960784, 0.6862745098039216];
            } else {
              return [0.6036446469248291, 0.39635535307517084];
            }
          } else {
            if (f['work_study_hours'] <= 1.495000) {
              return [0.21428571428571427, 0.7857142857142857];
            } else {
              return [0.011627906976744186, 0.9883720930232558];
            }
          }
        }
      } else {
        if (f['log_screen_time'] <= 1.910283) {
          if (f['entertainment_share'] <= 0.988835) {
            if (f['social_media_share'] <= 0.773276) {
              return [1.0, 0.0];
            } else {
              return [0.5714285714285714, 0.42857142857142855];
            }
          } else {
            if (f['social_media_hours'] <= 4.005000) {
              return [1.0, 0.0];
            } else {
              return [0.0, 1.0];
            }
          }
        } else {
          if (f['age'] <= 18.500000) {
            if (f['social_media_hours'] <= 4.020000) {
              return [1.0, 0.0];
            } else {
              return [0.0, 1.0];
            }
          } else {
            if (f['social_media_share'] <= 0.571316) {
              return [0.37142857142857144, 0.6285714285714286];
            } else {
              return [0.016286644951140065, 0.9837133550488599];
            }
          }
        }
      }
    }
  } else {
    if (f['gaming_share'] <= 0.463872) {
      if (f['work_study_share'] <= 0.675397) {
        if (f['screen_sleep_ratio'] <= 0.933126) {
          return [0.3333333333333333, 0.6666666666666666];
        } else {
          if (f['log_screen_time'] <= 2.195556) {
            if (f['notif_x_switch'] <= 1.171789) {
              return [0.46153846153846156, 0.5384615384615384];
            } else {
              return [0.034482758620689655, 0.9655172413793104];
            }
          } else {
            return [0.0, 1.0];
          }
        }
      } else {
        if (f['daily_screen_time_hours'] <= 8.005000) {
          return [0.5555555555555556, 0.4444444444444444];
        } else {
          return [0.0, 1.0];
        }
      }
    } else {
      return [0.2, 0.8];
    }
  }
}

function addictionRisk_tree_13(f) {
  if (f['work_study_share'] <= 0.653858) {
    if (f['log_screen_time'] <= 2.188856) {
      if (f['social_media_share'] <= 0.648955) {
        if (f['notification_load_index'] <= 36.798347) {
          if (f['weekend_screen_time'] <= 7.425000) {
            if (f['notifications_per_day'] <= 171.500000) {
              return [0.995475113122172, 0.004524886877828055];
            } else {
              return [0.5384615384615384, 0.46153846153846156];
            }
          } else {
            if (f['entertainment_share'] <= 0.570483) {
              return [0.645021645021645, 0.354978354978355];
            } else {
              return [0.4740566037735849, 0.5259433962264151];
            }
          }
        } else {
          if (f['daily_screen_time_hours'] <= 6.210000) {
            return [1.0, 0.0];
          } else {
            return [0.5454545454545454, 0.45454545454545453];
          }
        }
      } else {
        if (f['notif_x_switch'] <= 9.505424) {
          if (f['daily_screen_time_hours'] <= 5.465000) {
            if (f['gaming_share'] <= 0.387184) {
              return [0.24752475247524752, 0.7524752475247525];
            } else {
              return [0.42424242424242425, 0.5757575757575758];
            }
          } else {
            if (f['weekend_escalation'] <= 0.446699) {
              return [0.010033444816053512, 0.9899665551839465];
            } else {
              return [0.09090909090909091, 0.9090909090909091];
            }
          }
        } else {
          if (f['log_screen_time'] <= 1.491779) {
            if (f['social_media_hours'] <= 4.000000) {
              return [1.0, 0.0];
            } else {
              return [0.0, 1.0];
            }
          } else {
            if (f['social_media_hours'] <= 3.960000) {
              return [1.0, 0.0];
            } else {
              return [0.0, 1.0];
            }
          }
        }
      }
    } else {
      if (f['entertainment_share'] <= 0.901516) {
        if (f['productivity_share'] <= 0.522690) {
          if (f['weekend_screen_time'] <= 10.045000) {
            if (f['weekend_screen_time'] <= 10.015000) {
              return [0.004545454545454545, 0.9954545454545455];
            } else {
              return [0.14285714285714285, 0.8571428571428571];
            }
          } else {
            return [0.0, 1.0];
          }
        } else {
          if (f['work_study_hours'] <= 4.455000) {
            return [0.5, 0.5];
          } else {
            return [0.0, 1.0];
          }
        }
      } else {
        if (f['notif_x_switch'] <= 0.635100) {
          if (f['notifications_per_day'] <= 40.500000) {
            return [0.3333333333333333, 0.6666666666666666];
          } else {
            return [0.0, 1.0];
          }
        } else {
          return [0.0, 1.0];
        }
      }
    }
  } else {
    if (f['screen_sleep_ratio'] <= 0.901546) {
      if (f['log_screen_time'] <= 1.964307) {
        if (f['app_opens_per_day'] <= 129.500000) {
          if (f['social_media_hours'] <= 3.995000) {
            if (f['weekend_screen_time'] <= 7.725000) {
              return [1.0, 0.0];
            } else {
              return [0.9230769230769231, 0.07692307692307693];
            }
          } else {
            return [0.0, 1.0];
          }
        } else {
          if (f['social_media_hours'] <= 3.985000) {
            return [1.0, 0.0];
          } else {
            return [0.0, 1.0];
          }
        }
      } else {
        if (f['notifications_per_day'] <= 170.500000) {
          if (f['social_media_hours'] <= 3.895000) {
            if (f['gaming_share'] <= 0.471358) {
              return [0.3, 0.7];
            } else {
              return [0.8571428571428571, 0.14285714285714285];
            }
          } else {
            return [0.0, 1.0];
          }
        } else {
          if (f['app_switch_index'] <= 17.332432) {
            return [0.9230769230769231, 0.07692307692307693];
          } else {
            return [0.0, 1.0];
          }
        }
      }
    } else {
      if (f['social_media_share'] <= 0.493169) {
        if (f['log_screen_time'] <= 2.191095) {
          if (f['daily_screen_time_hours'] <= 6.005000) {
            return [1.0, 0.0];
          } else {
            if (f['notification_load_index'] <= 32.290648) {
              return [0.6854838709677419, 0.31451612903225806];
            } else {
              return [0.08333333333333333, 0.9166666666666666];
            }
          }
        } else {
          if (f['daily_screen_time_hours'] <= 8.005000) {
            return [0.2857142857142857, 0.7142857142857143];
          } else {
            return [0.0, 1.0];
          }
        }
      } else {
        if (f['sleep_hours'] <= 5.455000) {
          if (f['stress_x_screen'] <= 9.360000) {
            if (f['screen_sleep_ratio'] <= 0.988936) {
              return [0.5384615384615384, 0.46153846153846156];
            } else {
              return [0.1, 0.9];
            }
          } else {
            if (f['log_screen_time'] <= 1.889333) {
              return [0.75, 0.25];
            } else {
              return [0.2222222222222222, 0.7777777777777778];
            }
          }
        } else {
          if (f['social_media_hours'] <= 3.635000) {
            return [1.0, 0.0];
          } else {
            if (f['gaming_share'] <= 0.500793) {
              return [0.0, 1.0];
            } else {
              return [0.1, 0.9];
            }
          }
        }
      }
    }
  }
}

function addictionRisk_tree_14(f) {
  if (f['log_screen_time'] <= 2.191095) {
    if (f['screen_sleep_ratio'] <= 0.774594) {
      if (f['social_media_hours'] <= 4.005000) {
        if (f['notification_load_index'] <= 26.292092) {
          if (f['screen_sleep_ratio'] <= 0.719753) {
            if (f['social_media_share'] <= 0.120936) {
              return [0.8333333333333334, 0.16666666666666666];
            } else {
              return [1.0, 0.0];
            }
          } else {
            if (f['log_screen_time'] <= 1.953019) {
              return [1.0, 0.0];
            } else {
              return [0.4444444444444444, 0.5555555555555556];
            }
          }
        } else {
          if (f['weekend_screen_time'] <= 8.545000) {
            if (f['gaming_share'] <= 0.114648) {
              return [0.971830985915493, 0.028169014084507043];
            } else {
              return [1.0, 0.0];
            }
          } else {
            return [0.75, 0.25];
          }
        }
      } else {
        return [0.0, 1.0];
      }
    } else {
      if (f['log_screen_time'] <= 1.938022) {
        if (f['social_media_share'] <= 0.818145) {
          if (f['daily_screen_time_hours'] <= 5.765000) {
            if (f['social_media_share'] <= 0.745152) {
              return [1.0, 0.0];
            } else {
              return [0.6666666666666666, 0.3333333333333333];
            }
          } else {
            if (f['notification_load_index'] <= 32.052155) {
              return [0.9142857142857143, 0.08571428571428572];
            } else {
              return [0.5833333333333334, 0.4166666666666667];
            }
          }
        } else {
          if (f['log_screen_time'] <= 1.599386) {
            return [0.2857142857142857, 0.7142857142857143];
          } else {
            if (f['work_study_hours'] <= 5.215000) {
              return [0.0, 1.0];
            } else {
              return [0.058823529411764705, 0.9411764705882353];
            }
          }
        }
      } else {
        if (f['weekend_escalation'] <= 0.127315) {
          if (f['age'] <= 34.500000) {
            if (f['social_media_hours'] <= 1.810000) {
              return [0.5405405405405406, 0.4594594594594595];
            } else {
              return [0.11278195488721804, 0.8872180451127819];
            }
          } else {
            return [0.8, 0.2];
          }
        } else {
          if (f['weekend_x_screen'] <= 0.855000) {
            return [1.0, 0.0];
          } else {
            if (f['gaming_share'] <= 0.068967) {
              return [0.48672566371681414, 0.5132743362831859];
            } else {
              return [0.33885209713024284, 0.6611479028697572];
            }
          }
        }
      }
    }
  } else {
    if (f['daily_screen_time_hours'] <= 8.005000) {
      if (f['productivity_share'] <= 0.670426) {
        if (f['daily_screen_time_hours'] <= 7.975000) {
          if (f['social_media_hours'] <= 2.550000) {
            return [0.2222222222222222, 0.7777777777777778];
          } else {
            return [0.0, 1.0];
          }
        } else {
          return [0.0, 1.0];
        }
      } else {
        return [0.4, 0.6];
      }
    } else {
      return [0.0, 1.0];
    }
  }
}

function addictionRisk_tree_15(f) {
  if (f['productivity_share'] <= 0.653858) {
    if (f['notification_load_index'] <= 29.734710) {
      if (f['weekend_escalation'] <= 0.360470) {
        if (f['stress_x_screen'] <= 15.950000) {
          if (f['social_media_share'] <= 0.580667) {
            if (f['log_screen_time'] <= 2.194443) {
              return [0.5863970588235294, 0.41360294117647056];
            } else {
              return [0.0006313131313131314, 0.9993686868686869];
            }
          } else {
            if (f['weekend_screen_time'] <= 6.910000) {
              return [0.39285714285714285, 0.6071428571428571];
            } else {
              return [0.011019283746556474, 0.9889807162534435];
            }
          }
        } else {
          return [0.0, 1.0];
        }
      } else {
        if (f['daily_screen_time_hours'] <= 6.045000) {
          if (f['app_opens_per_day'] <= 22.500000) {
            return [1.0, 0.0];
          } else {
            if (f['stress_x_screen'] <= 6.710000) {
              return [0.4855072463768116, 0.5144927536231884];
            } else {
              return [0.7142857142857143, 0.2857142857142857];
            }
          }
        } else {
          if (f['social_media_share'] <= 0.545599) {
            if (f['notification_load_index'] <= 10.462652) {
              return [0.32, 0.68];
            } else {
              return [0.75, 0.25];
            }
          } else {
            return [0.0, 1.0];
          }
        }
      }
    } else {
      if (f['log_screen_time'] <= 1.835775) {
        if (f['notif_x_switch'] <= 15.716487) {
          if (f['social_media_share'] <= 0.933534) {
            if (f['weekend_escalation'] <= 0.349265) {
              return [0.8571428571428571, 0.14285714285714285];
            } else {
              return [0.9848484848484849, 0.015151515151515152];
            }
          } else {
            if (f['daily_screen_time_hours'] <= 3.535000) {
              return [0.5263157894736842, 0.47368421052631576];
            } else {
              return [0.0196078431372549, 0.9803921568627451];
            }
          }
        } else {
          if (f['app_switch_index'] <= 35.449318) {
            if (f['notification_load_index'] <= 61.519268) {
              return [0.0, 1.0];
            } else {
              return [0.5, 0.5];
            }
          } else {
            if (f['social_media_share'] <= 0.988710) {
              return [1.0, 0.0];
            } else {
              return [0.16666666666666666, 0.8333333333333334];
            }
          }
        }
      } else {
        if (f['entertainment_share'] <= 0.998198) {
          if (f['notif_x_switch'] <= 3.331743) {
            if (f['app_opens_per_day'] <= 53.500000) {
              return [0.46153846153846156, 0.5384615384615384];
            } else {
              return [0.0, 1.0];
            }
          } else {
            if (f['social_media_hours'] <= 4.035000) {
              return [0.8448275862068966, 0.15517241379310345];
            } else {
              return [0.0, 1.0];
            }
          }
        } else {
          if (f['gaming_share'] <= 0.454474) {
            return [0.0, 1.0];
          } else {
            if (f['stress_x_screen'] <= 5.475000) {
              return [0.3888888888888889, 0.6111111111111112];
            } else {
              return [0.07142857142857142, 0.9285714285714286];
            }
          }
        }
      }
    }
  } else {
    if (f['entertainment_share'] <= 0.939457) {
      if (f['daily_screen_time_hours'] <= 6.265000) {
        if (f['social_media_hours'] <= 3.940000) {
          if (f['app_opens_per_day'] <= 37.500000) {
            if (f['gaming_hours'] <= 2.745000) {
              return [0.9787234042553191, 0.02127659574468085];
            } else {
              return [0.3333333333333333, 0.6666666666666666];
            }
          } else {
            if (f['gaming_hours'] <= 2.280000) {
              return [1.0, 0.0];
            } else {
              return [0.9743589743589743, 0.02564102564102564];
            }
          }
        } else {
          return [0.0, 1.0];
        }
      } else {
        if (f['work_study_hours'] <= 5.545000) {
          if (f['social_media_share'] <= 0.575442) {
            if (f['sleep_hours'] <= 4.920000) {
              return [0.9333333333333333, 0.06666666666666667];
            } else {
              return [0.4056603773584906, 0.5943396226415094];
            }
          } else {
            return [0.0, 1.0];
          }
        } else {
          if (f['gaming_hours'] <= 0.700000) {
            if (f['work_study_hours'] <= 5.780000) {
              return [0.13333333333333333, 0.8666666666666667];
            } else {
              return [0.625, 0.375];
            }
          } else {
            if (f['weekend_escalation'] <= 0.349025) {
              return [0.017241379310344827, 0.9827586206896551];
            } else {
              return [0.3333333333333333, 0.6666666666666666];
            }
          }
        }
      }
    } else {
      if (f['daily_screen_time_hours'] <= 5.760000) {
        if (f['gaming_hours'] <= 2.205000) {
          if (f['weekend_screen_time'] <= 5.435000) {
            if (f['social_media_hours'] <= 4.005000) {
              return [1.0, 0.0];
            } else {
              return [0.0, 1.0];
            }
          } else {
            if (f['app_switch_index'] <= 37.325544) {
              return [0.20930232558139536, 0.7906976744186046];
            } else {
              return [0.48148148148148145, 0.5185185185185185];
            }
          }
        } else {
          if (f['entertainment_share'] <= 0.999022) {
            return [1.0, 0.0];
          } else {
            if (f['social_media_hours'] <= 4.020000) {
              return [1.0, 0.0];
            } else {
              return [0.0, 1.0];
            }
          }
        }
      } else {
        if (f['social_media_share'] <= 0.596373) {
          if (f['notification_load_index'] <= 11.839574) {
            return [0.3333333333333333, 0.6666666666666666];
          } else {
            if (f['weekend_screen_time'] <= 9.100000) {
              return [0.9545454545454546, 0.045454545454545456];
            } else {
              return [0.4, 0.6];
            }
          }
        } else {
          if (f['log_screen_time'] <= 1.940178) {
            if (f['social_media_hours'] <= 4.585000) {
              return [0.2857142857142857, 0.7142857142857143];
            } else {
              return [0.0, 1.0];
            }
          } else {
            return [0.0, 1.0];
          }
        }
      }
    }
  }
}

function addictionRisk_tree_16(f) {
  if (f['weekend_screen_time'] <= 8.915000) {
    if (f['notification_load_index'] <= 41.386581) {
      if (f['screen_sleep_ratio'] <= 0.784570) {
        if (f['log_screen_time'] <= 1.946624) {
          if (f['notification_load_index'] <= 39.157791) {
            if (f['screen_sleep_ratio'] <= 0.382299) {
              return [0.23076923076923078, 0.7692307692307693];
            } else {
              return [0.6894977168949772, 0.3105022831050228];
            }
          } else {
            if (f['log_screen_time'] <= 1.699277) {
              return [0.18181818181818182, 0.8181818181818182];
            } else {
              return [0.5806451612903226, 0.41935483870967744];
            }
          }
        } else {
          if (f['entertainment_share'] <= 0.965630) {
            if (f['entertainment_share'] <= 0.672825) {
              return [0.7647058823529411, 0.23529411764705882];
            } else {
              return [0.4117647058823529, 0.5882352941176471];
            }
          } else {
            if (f['age'] <= 24.000000) {
              return [0.1, 0.9];
            } else {
              return [0.0, 1.0];
            }
          }
        }
      } else {
        if (f['sleep_deficit'] <= 0.235000) {
          if (f['stress_x_screen'] <= 14.980000) {
            if (f['social_media_hours'] <= 4.010000) {
              return [0.40384615384615385, 0.5961538461538461];
            } else {
              return [0.0, 1.0];
            }
          } else {
            if (f['work_study_hours'] <= 3.810000) {
              return [0.9090909090909091, 0.09090909090909091];
            } else {
              return [0.375, 0.625];
            }
          }
        } else {
          if (f['social_media_hours'] <= 4.020000) {
            if (f['work_study_share'] <= 0.693147) {
              return [0.7215777262180975, 0.27842227378190254];
            } else {
              return [0.8995633187772926, 0.10043668122270742];
            }
          } else {
            return [0.0, 1.0];
          }
        }
      }
    } else {
      if (f['social_media_hours'] <= 3.995000) {
        return [1.0, 0.0];
      } else {
        return [0.0, 1.0];
      }
    }
  } else {
    if (f['daily_screen_time_hours'] <= 8.005000) {
      if (f['social_media_share'] <= 0.530692) {
        if (f['entertainment_share'] <= 0.673879) {
          if (f['app_switch_index'] <= 3.453499) {
            if (f['age'] <= 23.500000) {
              return [0.1111111111111111, 0.8888888888888888];
            } else {
              return [0.5714285714285714, 0.42857142857142855];
            }
          } else {
            if (f['weekend_screen_time'] <= 9.975000) {
              return [0.7552447552447552, 0.24475524475524477];
            } else {
              return [0.5172413793103449, 0.4827586206896552];
            }
          }
        } else {
          if (f['stress_x_screen'] <= 14.840000) {
            if (f['daily_screen_time_hours'] <= 7.835000) {
              return [0.625, 0.375];
            } else {
              return [0.0, 1.0];
            }
          } else {
            if (f['daily_screen_time_hours'] <= 7.785000) {
              return [0.0, 1.0];
            } else {
              return [0.6, 0.4];
            }
          }
        }
      } else {
        if (f['daily_screen_time_hours'] <= 7.135000) {
          if (f['screen_sleep_ratio'] <= 1.139327) {
            if (f['sleep_hours'] <= 8.410000) {
              return [0.0, 1.0];
            } else {
              return [0.125, 0.875];
            }
          } else {
            if (f['social_media_hours'] <= 4.025000) {
              return [1.0, 0.0];
            } else {
              return [0.0, 1.0];
            }
          }
        } else {
          return [0.0, 1.0];
        }
      }
    } else {
      return [0.0, 1.0];
    }
  }
}

function addictionRisk_tree_17(f) {
  if (f['notification_load_index'] <= 26.913160) {
    if (f['social_media_hours'] <= 4.005000) {
      if (f['daily_screen_time_hours'] <= 7.925000) {
        if (f['daily_screen_time_hours'] <= 6.010000) {
          return [1.0, 0.0];
        } else {
          if (f['work_study_hours'] <= 1.535000) {
            if (f['social_media_hours'] <= 1.150000) {
              return [0.64, 0.36];
            } else {
              return [0.23255813953488372, 0.7674418604651163];
            }
          } else {
            if (f['screen_sleep_ratio'] <= 1.033931) {
              return [0.39035087719298245, 0.6096491228070176];
            } else {
              return [0.6582278481012658, 0.34177215189873417];
            }
          }
        }
      } else {
        if (f['entertainment_share'] <= 0.885681) {
          if (f['weekend_screen_time'] <= 10.050000) {
            if (f['daily_screen_time_hours'] <= 7.995000) {
              return [0.45454545454545453, 0.5454545454545454];
            } else {
              return [0.0, 1.0];
            }
          } else {
            if (f['sleep_deficit'] <= 1.990000) {
              return [0.0, 1.0];
            } else {
              return [0.0035714285714285713, 0.9964285714285714];
            }
          }
        } else {
          return [0.14285714285714285, 0.8571428571428571];
        }
      }
    } else {
      return [0.0, 1.0];
    }
  } else {
    if (f['entertainment_share'] <= 0.999022) {
      if (f['notifications_per_day'] <= 188.500000) {
        if (f['social_media_hours'] <= 4.005000) {
          if (f['log_screen_time'] <= 1.959390) {
            return [1.0, 0.0];
          } else {
            return [0.8, 0.2];
          }
        } else {
          return [0.0, 1.0];
        }
      } else {
        if (f['daily_screen_time_hours'] <= 6.260000) {
          if (f['log_screen_time'] <= 1.914712) {
            if (f['social_media_hours'] <= 3.650000) {
              return [1.0, 0.0];
            } else {
              return [0.42857142857142855, 0.5714285714285714];
            }
          } else {
            if (f['app_opens_per_day'] <= 52.500000) {
              return [0.2, 0.8];
            } else {
              return [0.8695652173913043, 0.13043478260869565];
            }
          }
        } else {
          if (f['social_media_hours'] <= 3.995000) {
            if (f['log_screen_time'] <= 2.192770) {
              return [0.5901639344262295, 0.4098360655737705];
            } else {
              return [0.0, 1.0];
            }
          } else {
            return [0.0, 1.0];
          }
        }
      }
    } else {
      if (f['social_media_hours'] <= 4.005000) {
        if (f['notif_x_switch'] <= 7.166432) {
          if (f['social_media_hours'] <= 3.690000) {
            if (f['app_switch_index'] <= 17.610658) {
              return [1.0, 0.0];
            } else {
              return [0.8421052631578947, 0.15789473684210525];
            }
          } else {
            if (f['social_media_share'] <= 0.617423) {
              return [0.3333333333333333, 0.6666666666666666];
            } else {
              return [1.0, 0.0];
            }
          }
        } else {
          return [1.0, 0.0];
        }
      } else {
        return [0.0, 1.0];
      }
    }
  }
}

function addictionRisk_tree_18(f) {
  if (f['log_screen_time'] <= 2.192212) {
    if (f['stress_x_screen'] <= 12.080000) {
      if (f['social_media_hours'] <= 4.005000) {
        if (f['daily_screen_time_hours'] <= 6.025000) {
          return [1.0, 0.0];
        } else {
          if (f['notif_x_switch'] <= 1.058128) {
            if (f['weekend_screen_time'] <= 8.060000) {
              return [0.41935483870967744, 0.5806451612903226];
            } else {
              return [0.7528089887640449, 0.24719101123595505];
            }
          } else {
            if (f['entertainment_share'] <= 0.397182) {
              return [0.7017543859649122, 0.2982456140350877];
            } else {
              return [0.4387755102040816, 0.5612244897959183];
            }
          }
        }
      } else {
        return [0.0, 1.0];
      }
    } else {
      if (f['social_media_share'] <= 0.545537) {
        if (f['weekend_escalation'] <= 0.368719) {
          if (f['weekend_escalation'] <= 0.301018) {
            if (f['social_media_share'] <= 0.262689) {
              return [0.7142857142857143, 0.2857142857142857];
            } else {
              return [0.38235294117647056, 0.6176470588235294];
            }
          } else {
            if (f['gaming_hours'] <= 2.270000) {
              return [0.3181818181818182, 0.6818181818181818];
            } else {
              return [0.0, 1.0];
            }
          }
        } else {
          if (f['weekend_x_screen'] <= 2.895000) {
            return [1.0, 0.0];
          } else {
            return [0.3333333333333333, 0.6666666666666666];
          }
        }
      } else {
        if (f['gaming_hours'] <= 3.080000) {
          return [0.0, 1.0];
        } else {
          if (f['social_media_share'] <= 0.603483) {
            return [0.2222222222222222, 0.7777777777777778];
          } else {
            return [0.0, 1.0];
          }
        }
      }
    }
  } else {
    if (f['work_study_share'] <= 0.675204) {
      if (f['weekend_x_screen'] <= 2.835000) {
        if (f['app_opens_per_day'] <= 148.500000) {
          return [0.0, 1.0];
        } else {
          if (f['weekend_screen_time'] <= 10.045000) {
            if (f['daily_screen_time_hours'] <= 8.105000) {
              return [0.5, 0.5];
            } else {
              return [0.0, 1.0];
            }
          } else {
            return [0.0, 1.0];
          }
        }
      } else {
        if (f['log_screen_time'] <= 2.213748) {
          return [0.2857142857142857, 0.7142857142857143];
        } else {
          return [0.0, 1.0];
        }
      }
    } else {
      if (f['entertainment_share'] <= 0.460706) {
        return [0.375, 0.625];
      } else {
        if (f['app_switch_index'] <= 17.916680) {
          return [0.0, 1.0];
        } else {
          return [0.14285714285714285, 0.8571428571428571];
        }
      }
    }
  }
}

function addictionRisk_tree_19(f) {
  if (f['weekend_screen_time'] <= 8.665000) {
    if (f['daily_screen_time_hours'] <= 5.795000) {
      if (f['stress_x_screen'] <= 3.295000) {
        if (f['daily_screen_time_hours'] <= 5.605000) {
          if (f['social_media_hours'] <= 4.000000) {
            return [1.0, 0.0];
          } else {
            return [0.0, 1.0];
          }
        } else {
          if (f['screen_sleep_ratio'] <= 0.766896) {
            return [1.0, 0.0];
          } else {
            if (f['social_media_hours'] <= 4.315000) {
              return [1.0, 0.0];
            } else {
              return [0.0, 1.0];
            }
          }
        }
      } else {
        if (f['social_media_share'] <= 0.854675) {
          if (f['age'] <= 18.500000) {
            if (f['log_screen_time'] <= 1.873338) {
              return [1.0, 0.0];
            } else {
              return [0.3, 0.7];
            }
          } else {
            if (f['log_screen_time'] <= 1.800884) {
              return [0.9980506822612085, 0.001949317738791423];
            } else {
              return [0.8857142857142857, 0.11428571428571428];
            }
          }
        } else {
          if (f['log_screen_time'] <= 1.690094) {
            if (f['age'] <= 20.500000) {
              return [0.07317073170731707, 0.926829268292683];
            } else {
              return [0.31313131313131315, 0.6868686868686869];
            }
          } else {
            return [0.0, 1.0];
          }
        }
      }
    } else {
      if (f['age'] <= 21.500000) {
        if (f['notification_load_index'] <= 5.197406) {
          return [1.0, 0.0];
        } else {
          if (f['sleep_deficit'] <= 2.635000) {
            if (f['social_media_hours'] <= 4.060000) {
              return [0.7032967032967034, 0.2967032967032967];
            } else {
              return [0.0, 1.0];
            }
          } else {
            return [0.8571428571428571, 0.14285714285714285];
          }
        }
      } else {
        if (f['entertainment_share'] <= 0.901199) {
          if (f['notification_load_index'] <= 34.984240) {
            if (f['daily_screen_time_hours'] <= 6.025000) {
              return [1.0, 0.0];
            } else {
              return [0.3957703927492447, 0.6042296072507553];
            }
          } else {
            if (f['notif_x_switch'] <= 8.185517) {
              return [1.0, 0.0];
            } else {
              return [0.4444444444444444, 0.5555555555555556];
            }
          }
        } else {
          if (f['social_media_share'] <= 0.666158) {
            if (f['work_study_share'] <= 0.261642) {
              return [0.0, 1.0];
            } else {
              return [0.44, 0.56];
            }
          } else {
            return [0.0, 1.0];
          }
        }
      }
    }
  } else {
    if (f['notification_load_index'] <= 27.991339) {
      if (f['daily_screen_time_hours'] <= 7.975000) {
        if (f['social_media_share'] <= 0.570272) {
          if (f['productivity_share'] <= 0.215968) {
            if (f['social_media_hours'] <= 1.810000) {
              return [0.6818181818181818, 0.3181818181818182];
            } else {
              return [0.15555555555555556, 0.8444444444444444];
            }
          } else {
            if (f['work_study_hours'] <= 2.765000) {
              return [0.759493670886076, 0.24050632911392406];
            } else {
              return [0.4729064039408867, 0.5270935960591133];
            }
          }
        } else {
          if (f['notif_x_switch'] <= 5.402877) {
            return [0.0, 1.0];
          } else {
            return [0.14285714285714285, 0.8571428571428571];
          }
        }
      } else {
        if (f['log_screen_time'] <= 2.197780) {
          if (f['academic_work_impact_enc'] <= 0.500000) {
            return [0.25, 0.75];
          } else {
            return [0.0, 1.0];
          }
        } else {
          return [0.0, 1.0];
        }
      }
    } else {
      if (f['entertainment_share'] <= 0.797808) {
        if (f['log_screen_time'] <= 2.192212) {
          if (f['app_switch_index'] <= 6.962487) {
            if (f['notif_x_switch'] <= 1.343749) {
              return [0.8, 0.2];
            } else {
              return [1.0, 0.0];
            }
          } else {
            if (f['productivity_share'] <= 0.230893) {
              return [0.0, 1.0];
            } else {
              return [0.5434782608695652, 0.45652173913043476];
            }
          }
        } else {
          return [0.0, 1.0];
        }
      } else {
        if (f['social_media_hours'] <= 3.955000) {
          return [0.2222222222222222, 0.7777777777777778];
        } else {
          return [0.0, 1.0];
        }
      }
    }
  }
}

function addictionRisk_tree_20(f) {
  if (f['gaming_share'] <= 0.444684) {
    if (f['weekend_escalation'] <= 0.354153) {
      if (f['daily_screen_time_hours'] <= 8.005000) {
        if (f['social_media_hours'] <= 3.985000) {
          if (f['work_study_share'] <= 0.833191) {
            if (f['screen_sleep_ratio'] <= 0.763139) {
              return [0.9809523809523809, 0.01904761904761905];
            } else {
              return [0.5694444444444444, 0.4305555555555556];
            }
          } else {
            if (f['weekend_screen_time'] <= 7.730000) {
              return [1.0, 0.0];
            } else {
              return [0.45454545454545453, 0.5454545454545454];
            }
          }
        } else {
          if (f['social_media_share'] <= 0.523526) {
            return [0.14285714285714285, 0.8571428571428571];
          } else {
            return [0.0, 1.0];
          }
        }
      } else {
        return [0.0, 1.0];
      }
    } else {
      if (f['social_media_hours'] <= 4.005000) {
        if (f['stress_x_screen'] <= 12.430000) {
          if (f['weekend_x_screen'] <= 2.895000) {
            if (f['weekend_escalation'] <= 0.361117) {
              return [0.7142857142857143, 0.2857142857142857];
            } else {
              return [0.9672131147540983, 0.03278688524590164];
            }
          } else {
            if (f['log_screen_time'] <= 2.076255) {
              return [0.9655172413793104, 0.034482758620689655];
            } else {
              return [0.0, 1.0];
            }
          }
        } else {
          if (f['academic_work_impact_enc'] <= 0.500000) {
            if (f['app_opens_per_day'] <= 84.000000) {
              return [0.7777777777777778, 0.2222222222222222];
            } else {
              return [0.1, 0.9];
            }
          } else {
            return [0.7058823529411765, 0.29411764705882354];
          }
        }
      } else {
        return [0.0, 1.0];
      }
    }
  } else {
    if (f['weekend_screen_time'] <= 7.855000) {
      if (f['social_media_hours'] <= 4.005000) {
        if (f['gaming_hours'] <= 2.755000) {
          return [1.0, 0.0];
        } else {
          if (f['log_screen_time'] <= 1.950877) {
            return [1.0, 0.0];
          } else {
            if (f['notification_load_index'] <= 7.830360) {
              return [1.0, 0.0];
            } else {
              return [0.5483870967741935, 0.45161290322580644];
            }
          }
        }
      } else {
        return [0.0, 1.0];
      }
    } else {
      if (f['social_media_share'] <= 0.593307) {
        if (f['stress_x_screen'] <= 15.940000) {
          if (f['daily_screen_time_hours'] <= 6.385000) {
            if (f['log_screen_time'] <= 1.948759) {
              return [1.0, 0.0];
            } else {
              return [0.7096774193548387, 0.2903225806451613];
            }
          } else {
            if (f['log_screen_time'] <= 2.196665) {
              return [0.4375, 0.5625];
            } else {
              return [0.0, 1.0];
            }
          }
        } else {
          return [0.0, 1.0];
        }
      } else {
        if (f['gaming_share'] <= 0.630676) {
          if (f['log_screen_time'] <= 1.946624) {
            if (f['weekend_screen_time'] <= 8.450000) {
              return [0.0, 1.0];
            } else {
              return [0.7142857142857143, 0.2857142857142857];
            }
          } else {
            return [0.0, 1.0];
          }
        } else {
          return [0.3333333333333333, 0.6666666666666666];
        }
      }
    }
  }
}

function addictionRisk_tree_21(f) {
  if (f['log_screen_time'] <= 2.194443) {
    if (f['log_screen_time'] <= 1.945195) {
      if (f['social_media_hours'] <= 4.005000) {
        return [1.0, 0.0];
      } else {
        return [0.0, 1.0];
      }
    } else {
      if (f['app_switch_index'] <= 26.186669) {
        if (f['social_media_share'] <= 0.546064) {
          if (f['screen_sleep_ratio'] <= 1.080714) {
            if (f['entertainment_share'] <= 0.368628) {
              return [0.8, 0.2];
            } else {
              return [0.42028985507246375, 0.5797101449275363];
            }
          } else {
            if (f['entertainment_share'] <= 0.692301) {
              return [0.7126865671641791, 0.2873134328358209];
            } else {
              return [0.4482758620689655, 0.5517241379310345];
            }
          }
        } else {
          if (f['sleep_hours'] <= 8.235000) {
            if (f['social_media_hours'] <= 3.810000) {
              return [0.6666666666666666, 0.3333333333333333];
            } else {
              return [0.0048543689320388345, 0.9951456310679612];
            }
          } else {
            if (f['log_screen_time'] <= 2.021526) {
              return [0.48148148148148145, 0.5185185185185185];
            } else {
              return [0.037037037037037035, 0.9629629629629629];
            }
          }
        }
      } else {
        if (f['productivity_share'] <= 0.611146) {
          if (f['notification_load_index'] <= 13.106331) {
            return [0.625, 0.375];
          } else {
            if (f['gaming_hours'] <= 1.830000) {
              return [1.0, 0.0];
            } else {
              return [0.7777777777777778, 0.2222222222222222];
            }
          }
        } else {
          return [0.3, 0.7];
        }
      }
    }
  } else {
    if (f['screen_sleep_ratio'] <= 1.143034) {
      if (f['work_study_hours'] <= 5.435000) {
        return [0.0, 1.0];
      } else {
        if (f['entertainment_share'] <= 0.418150) {
          return [0.25, 0.75];
        } else {
          return [0.0, 1.0];
        }
      }
    } else {
      return [0.0, 1.0];
    }
  }
}

function addictionRisk_tree_22(f) {
  if (f['screen_sleep_ratio'] <= 1.021027) {
    if (f['social_media_hours'] <= 3.995000) {
      if (f['weekend_escalation'] <= 0.358540) {
        if (f['weekend_screen_time'] <= 7.115000) {
          if (f['daily_screen_time_hours'] <= 6.005000) {
            return [1.0, 0.0];
          } else {
            if (f['gaming_share'] <= 0.280074) {
              return [0.0, 1.0];
            } else {
              return [0.875, 0.125];
            }
          }
        } else {
          if (f['notification_load_index'] <= 29.150623) {
            if (f['daily_screen_time_hours'] <= 6.015000) {
              return [1.0, 0.0];
            } else {
              return [0.31, 0.69];
            }
          } else {
            if (f['sleep_hours'] <= 8.340000) {
              return [0.8333333333333334, 0.16666666666666666];
            } else {
              return [0.5454545454545454, 0.45454545454545453];
            }
          }
        }
      } else {
        if (f['weekend_x_screen'] <= 2.525000) {
          if (f['daily_screen_time_hours'] <= 6.125000) {
            return [1.0, 0.0];
          } else {
            return [0.7142857142857143, 0.2857142857142857];
          }
        } else {
          if (f['notif_x_switch'] <= 6.519150) {
            if (f['log_screen_time'] <= 1.966411) {
              return [0.9906542056074766, 0.009345794392523364];
            } else {
              return [0.6226415094339622, 0.37735849056603776];
            }
          } else {
            return [1.0, 0.0];
          }
        }
      }
    } else {
      if (f['sleep_hours'] <= 4.535000) {
        return [0.16666666666666666, 0.8333333333333334];
      } else {
        return [0.0, 1.0];
      }
    }
  } else {
    if (f['daily_screen_time_hours'] <= 7.985000) {
      if (f['entertainment_share'] <= 0.670618) {
        if (f['stress_x_screen'] <= 6.210000) {
          if (f['work_study_hours'] <= 1.345000) {
            if (f['sleep_deficit'] <= 1.995000) {
              return [0.0, 1.0];
            } else {
              return [0.5714285714285714, 0.42857142857142855];
            }
          } else {
            if (f['notifications_per_day'] <= 221.000000) {
              return [0.9021739130434783, 0.09782608695652174];
            } else {
              return [0.25, 0.75];
            }
          }
        } else {
          if (f['sleep_deficit'] <= 2.615000) {
            if (f['gaming_hours'] <= 0.205000) {
              return [0.0, 1.0];
            } else {
              return [0.6412213740458015, 0.35877862595419846];
            }
          } else {
            if (f['screen_sleep_ratio'] <= 1.508308) {
              return [0.7142857142857143, 0.2857142857142857];
            } else {
              return [0.1, 0.9];
            }
          }
        }
      } else {
        if (f['daily_screen_time_hours'] <= 5.955000) {
          if (f['notifications_per_day'] <= 46.000000) {
            return [0.1, 0.9];
          } else {
            if (f['entertainment_share'] <= 0.999148) {
              return [0.9107142857142857, 0.08928571428571429];
            } else {
              return [0.44680851063829785, 0.5531914893617021];
            }
          }
        } else {
          if (f['sleep_deficit'] <= 2.475000) {
            if (f['gaming_share'] <= 0.391002) {
              return [0.12060301507537688, 0.8793969849246231];
            } else {
              return [0.3046875, 0.6953125];
            }
          } else {
            if (f['notif_x_switch'] <= 1.701698) {
              return [0.0, 1.0];
            } else {
              return [0.1044776119402985, 0.8955223880597015];
            }
          }
        }
      }
    } else {
      return [0.0, 1.0];
    }
  }
}

function addictionRisk_tree_23(f) {
  if (f['daily_screen_time_hours'] <= 7.975000) {
    if (f['entertainment_share'] <= 0.999148) {
      if (f['weekend_escalation'] <= 0.418181) {
        if (f['log_screen_time'] <= 1.946624) {
          if (f['social_media_hours'] <= 4.015000) {
            return [1.0, 0.0];
          } else {
            return [0.0, 1.0];
          }
        } else {
          if (f['social_media_hours'] <= 3.925000) {
            if (f['screen_sleep_ratio'] <= 1.033443) {
              return [0.4214876033057851, 0.5785123966942148];
            } else {
              return [0.6053333333333333, 0.39466666666666667];
            }
          } else {
            if (f['social_media_share'] <= 0.519815) {
              return [0.25, 0.75];
            } else {
              return [0.008928571428571428, 0.9910714285714286];
            }
          }
        }
      } else {
        if (f['social_media_hours'] <= 4.045000) {
          if (f['weekend_screen_time'] <= 8.820000) {
            return [1.0, 0.0];
          } else {
            if (f['sleep_deficit'] <= 0.065000) {
              return [0.4444444444444444, 0.5555555555555556];
            } else {
              return [0.9130434782608695, 0.08695652173913043];
            }
          }
        } else {
          return [0.0, 1.0];
        }
      }
    } else {
      if (f['weekend_escalation'] <= 0.494263) {
        if (f['daily_screen_time_hours'] <= 5.255000) {
          if (f['social_media_hours'] <= 4.005000) {
            return [1.0, 0.0];
          } else {
            return [0.0, 1.0];
          }
        } else {
          if (f['social_media_hours'] <= 3.995000) {
            if (f['sleep_hours'] <= 8.515000) {
              return [0.8285714285714286, 0.17142857142857143];
            } else {
              return [0.2727272727272727, 0.7272727272727273];
            }
          } else {
            return [0.0, 1.0];
          }
        }
      } else {
        if (f['weekend_screen_time'] <= 6.885000) {
          if (f['screen_sleep_ratio'] <= 0.383675) {
            if (f['productivity_share'] <= 0.977778) {
              return [0.0, 1.0];
            } else {
              return [0.15384615384615385, 0.8461538461538461];
            }
          } else {
            if (f['notifications_per_day'] <= 30.500000) {
              return [0.16666666666666666, 0.8333333333333334];
            } else {
              return [0.6608996539792388, 0.3391003460207612];
            }
          }
        } else {
          if (f['academic_work_impact_enc'] <= 0.500000) {
            if (f['work_study_hours'] <= 4.700000) {
              return [0.7142857142857143, 0.2857142857142857];
            } else {
              return [0.125, 0.875];
            }
          } else {
            if (f['sleep_hours'] <= 8.475000) {
              return [0.24, 0.76];
            } else {
              return [0.6153846153846154, 0.38461538461538464];
            }
          }
        }
      }
    }
  } else {
    if (f['app_switch_index'] <= 18.789892) {
      return [0.0, 1.0];
    } else {
      if (f['notifications_per_day'] <= 46.500000) {
        if (f['notification_load_index'] <= 3.524712) {
          return [0.0, 1.0];
        } else {
          return [0.16666666666666666, 0.8333333333333334];
        }
      } else {
        return [0.0, 1.0];
      }
    }
  }
}

function addictionRisk_tree_24(f) {
  if (f['work_study_share'] <= 0.669405) {
    if (f['weekend_screen_time'] <= 8.615000) {
      if (f['weekend_screen_time'] <= 7.405000) {
        if (f['social_media_hours'] <= 4.000000) {
          if (f['work_study_hours'] <= 3.440000) {
            if (f['weekend_x_screen'] <= 0.575000) {
              return [0.9302325581395349, 0.06976744186046512];
            } else {
              return [1.0, 0.0];
            }
          } else {
            if (f['weekend_x_screen'] <= 1.045000) {
              return [0.25, 0.75];
            } else {
              return [1.0, 0.0];
            }
          }
        } else {
          return [0.0, 1.0];
        }
      } else {
        if (f['entertainment_share'] <= 0.888196) {
          if (f['work_study_share'] <= 0.179451) {
            if (f['weekend_x_screen'] <= 1.655000) {
              return [0.16279069767441862, 0.8372093023255814];
            } else {
              return [0.9166666666666666, 0.08333333333333333];
            }
          } else {
            if (f['notif_x_switch'] <= 3.065926) {
              return [0.5037037037037037, 0.4962962962962963];
            } else {
              return [0.8064516129032258, 0.1935483870967742];
            }
          }
        } else {
          if (f['social_media_share'] <= 0.625216) {
            if (f['log_screen_time'] <= 2.024738) {
              return [0.9629629629629629, 0.037037037037037035];
            } else {
              return [0.08333333333333333, 0.9166666666666666];
            }
          } else {
            if (f['social_media_hours'] <= 3.935000) {
              return [1.0, 0.0];
            } else {
              return [0.006493506493506494, 0.9935064935064936];
            }
          }
        }
      }
    } else {
      if (f['screen_sleep_ratio'] <= 0.904293) {
        if (f['notifications_per_day'] <= 63.500000) {
          if (f['gaming_hours'] <= 1.700000) {
            return [0.4, 0.6];
          } else {
            if (f['notifications_per_day'] <= 36.500000) {
              return [0.125, 0.875];
            } else {
              return [0.0, 1.0];
            }
          }
        } else {
          if (f['age'] <= 19.500000) {
            return [0.75, 0.25];
          } else {
            if (f['social_media_share'] <= 0.656340) {
              return [0.6274509803921569, 0.37254901960784315];
            } else {
              return [0.0, 1.0];
            }
          }
        }
      } else {
        if (f['weekend_screen_time'] <= 10.275000) {
          if (f['entertainment_share'] <= 0.464266) {
            if (f['log_screen_time'] <= 2.198330) {
              return [0.6666666666666666, 0.3333333333333333];
            } else {
              return [0.0, 1.0];
            }
          } else {
            if (f['sleep_hours'] <= 7.940000) {
              return [0.14035087719298245, 0.8596491228070176];
            } else {
              return [0.010309278350515464, 0.9896907216494846];
            }
          }
        } else {
          if (f['weekend_escalation'] <= 0.364706) {
            return [0.0, 1.0];
          } else {
            if (f['app_switch_index'] <= 11.066586) {
              return [0.5, 0.5];
            } else {
              return [0.1875, 0.8125];
            }
          }
        }
      }
    }
  } else {
    if (f['social_media_hours'] <= 4.005000) {
      if (f['screen_sleep_ratio'] <= 1.206037) {
        if (f['app_switch_index'] <= 22.363521) {
          if (f['app_opens_per_day'] <= 111.500000) {
            if (f['log_screen_time'] <= 1.950186) {
              return [1.0, 0.0];
            } else {
              return [0.6470588235294118, 0.35294117647058826];
            }
          } else {
            if (f['sleep_deficit'] <= 1.205000) {
              return [0.30303030303030304, 0.696969696969697];
            } else {
              return [1.0, 0.0];
            }
          }
        } else {
          if (f['log_screen_time'] <= 1.962134) {
            return [1.0, 0.0];
          } else {
            if (f['app_switch_index'] <= 24.252736) {
              return [1.0, 0.0];
            } else {
              return [0.5, 0.5];
            }
          }
        }
      } else {
        if (f['sleep_hours'] <= 4.795000) {
          if (f['log_screen_time'] <= 2.009552) {
            return [1.0, 0.0];
          } else {
            return [0.8, 0.2];
          }
        } else {
          if (f['log_screen_time'] <= 2.197222) {
            if (f['notif_x_switch'] <= 5.169887) {
              return [0.7, 0.3];
            } else {
              return [0.16666666666666666, 0.8333333333333334];
            }
          } else {
            return [0.0, 1.0];
          }
        }
      }
    } else {
      return [0.0, 1.0];
    }
  }
}

function addictionRisk_predict_proba(f) {
  const treeFns = [addictionRisk_tree_0, addictionRisk_tree_1, addictionRisk_tree_2, addictionRisk_tree_3, addictionRisk_tree_4, addictionRisk_tree_5, addictionRisk_tree_6, addictionRisk_tree_7, addictionRisk_tree_8, addictionRisk_tree_9, addictionRisk_tree_10, addictionRisk_tree_11, addictionRisk_tree_12, addictionRisk_tree_13, addictionRisk_tree_14, addictionRisk_tree_15, addictionRisk_tree_16, addictionRisk_tree_17, addictionRisk_tree_18, addictionRisk_tree_19, addictionRisk_tree_20, addictionRisk_tree_21, addictionRisk_tree_22, addictionRisk_tree_23, addictionRisk_tree_24];
  const nClasses = 2;
  const sums = new Array(nClasses).fill(0);
  for (const fn of treeFns) {
    const p = fn(f);
    for (let c = 0; c < nClasses; c++) sums[c] += p[c];
  }
  return sums.map(s => s / treeFns.length);
}


function riskLevel3_tree_0(f) {
  if (f['log_screen_time'] <= 2.193328) {
    if (f['social_media_share'] <= 0.708181) {
      if (f['log_screen_time'] <= 1.946624) {
        if (f['notification_load_index'] <= 69.335491) {
          if (f['weekend_escalation'] <= 0.708169) {
            if (f['notification_load_index'] <= 39.207657) {
              if (f['social_media_hours'] <= 1.450000) {
                if (f['app_switch_index'] <= 36.534197) {
                  return [0.5959183673469388, 0.40408163265306124, 0.0];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              } else {
                if (f['social_media_hours'] <= 1.675000) {
                  return [0.24242424242424243, 0.7575757575757576, 0.0];
                } else {
                  return [0.46359223300970875, 0.529126213592233, 0.007281553398058253];
                }
              }
            } else {
              if (f['work_study_hours'] <= 4.255000) {
                if (f['entertainment_share'] <= 0.735199) {
                  return [0.74, 0.26, 0.0];
                } else {
                  return [0.4909090909090909, 0.5, 0.00909090909090909];
                }
              } else {
                if (f['sleep_deficit'] <= 1.080000) {
                  return [0.6086956521739131, 0.391304347826087, 0.0];
                } else {
                  return [0.9, 0.1, 0.0];
                }
              }
            }
          } else {
            if (f['sleep_hours'] <= 6.690000) {
              if (f['social_media_share'] <= 0.469465) {
                return [1.0, 0.0, 0.0];
              } else {
                return [0.375, 0.625, 0.0];
              }
            } else {
              if (f['gender_enc'] <= 0.500000) {
                if (f['gaming_share'] <= 0.262332) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [1.0, 0.0, 0.0];
                }
              } else {
                if (f['gaming_share'] <= 0.677305) {
                  return [0.18181818181818182, 0.8181818181818182, 0.0];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              }
            }
          }
        } else {
          return [1.0, 0.0, 0.0];
        }
      } else {
        if (f['productivity_share'] <= 0.795543) {
          if (f['weekend_screen_time'] <= 6.905000) {
            if (f['entertainment_share'] <= 0.921255) {
              return [0.0, 0.8, 0.2];
            } else {
              return [0.0, 1.0, 0.0];
            }
          } else {
            if (f['work_study_share'] <= 0.092296) {
              if (f['notifications_per_day'] <= 214.000000) {
                if (f['app_opens_per_day'] <= 160.500000) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.0, 0.16666666666666666, 0.8333333333333334];
                }
              } else {
                return [0.0, 0.25, 0.75];
              }
            } else {
              if (f['social_media_share'] <= 0.546940) {
                if (f['work_study_share'] <= 0.221320) {
                  return [0.0, 0.34265734265734266, 0.6573426573426573];
                } else {
                  return [0.0, 0.5160642570281124, 0.4839357429718876];
                }
              } else {
                if (f['sleep_deficit'] <= 2.760000) {
                  return [0.0, 0.05019305019305019, 0.9498069498069498];
                } else {
                  return [0.0, 0.4, 0.6];
                }
              }
            }
          }
        } else {
          if (f['work_study_hours'] <= 5.605000) {
            if (f['age'] <= 22.500000) {
              if (f['app_switch_index'] <= 16.520637) {
                return [0.0, 0.125, 0.875];
              } else {
                return [0.0, 1.0, 0.0];
              }
            } else {
              if (f['app_opens_per_day'] <= 51.000000) {
                return [0.0, 0.5, 0.5];
              } else {
                if (f['app_switch_index'] <= 24.041582) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.0, 0.6666666666666666, 0.3333333333333333];
                }
              }
            }
          } else {
            if (f['gaming_hours'] <= 1.580000) {
              return [0.0, 0.0, 1.0];
            } else {
              if (f['app_opens_per_day'] <= 70.000000) {
                if (f['notif_x_switch'] <= 0.925050) {
                  return [0.0, 0.3333333333333333, 0.6666666666666666];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              } else {
                if (f['entertainment_share'] <= 0.814533) {
                  return [0.0, 0.5, 0.5];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              }
            }
          }
        }
      }
    } else {
      if (f['weekend_escalation'] <= 0.650545) {
        if (f['daily_screen_time_hours'] <= 4.865000) {
          if (f['entertainment_share'] <= 0.988613) {
            if (f['weekend_x_screen'] <= 1.275000) {
              if (f['gaming_share'] <= 0.090596) {
                return [0.25, 0.75, 0.0];
              } else {
                return [1.0, 0.0, 0.0];
              }
            } else {
              return [0.0, 1.0, 0.0];
            }
          } else {
            if (f['gaming_share'] <= 0.179373) {
              if (f['social_media_hours'] <= 4.020000) {
                return [1.0, 0.0, 0.0];
              } else {
                return [0.0, 0.0, 1.0];
              }
            } else {
              if (f['weekend_screen_time'] <= 5.325000) {
                if (f['weekend_screen_time'] <= 5.230000) {
                  return [0.17410714285714285, 0.19196428571428573, 0.6339285714285714];
                } else {
                  return [0.3157894736842105, 0.47368421052631576, 0.21052631578947367];
                }
              } else {
                if (f['social_media_hours'] <= 4.005000) {
                  return [0.5, 0.5, 0.0];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              }
            }
          }
        } else {
          if (f['gaming_share'] <= 0.742915) {
            if (f['social_media_hours'] <= 4.005000) {
              if (f['notifications_per_day'] <= 96.500000) {
                return [1.0, 0.0, 0.0];
              } else {
                if (f['entertainment_share'] <= 0.995155) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.6666666666666666, 0.3333333333333333, 0.0];
                }
              }
            } else {
              return [0.0, 0.0, 1.0];
            }
          } else {
            return [0.25, 0.5, 0.25];
          }
        }
      } else {
        if (f['work_study_share'] <= 0.184028) {
          return [1.0, 0.0, 0.0];
        } else {
          if (f['app_opens_per_day'] <= 123.000000) {
            if (f['social_media_share'] <= 0.988710) {
              if (f['work_study_hours'] <= 1.495000) {
                return [0.0, 1.0, 0.0];
              } else {
                if (f['log_screen_time'] <= 1.510802) {
                  return [1.0, 0.0, 0.0];
                } else {
                  return [0.2222222222222222, 0.7777777777777778, 0.0];
                }
              }
            } else {
              if (f['app_opens_per_day'] <= 27.500000) {
                if (f['stress_x_screen'] <= 3.105000) {
                  return [0.0, 0.75, 0.25];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              } else {
                if (f['sleep_deficit'] <= 1.290000) {
                  return [0.018518518518518517, 0.0, 0.9814814814814815];
                } else {
                  return [0.13333333333333333, 0.26666666666666666, 0.6];
                }
              }
            }
          } else {
            if (f['social_media_share'] <= 0.998377) {
              if (f['work_study_share'] <= 0.841587) {
                return [0.16666666666666666, 0.8333333333333334, 0.0];
              } else {
                if (f['gender_enc'] <= 0.500000) {
                  return [0.3333333333333333, 0.6666666666666666, 0.0];
                } else {
                  return [0.9230769230769231, 0.07692307692307693, 0.0];
                }
              }
            } else {
              if (f['social_media_hours'] <= 4.020000) {
                return [0.8, 0.2, 0.0];
              } else {
                return [0.0, 0.0, 1.0];
              }
            }
          }
        }
      }
    }
  } else {
    if (f['log_screen_time'] <= 2.197780) {
      if (f['social_media_hours'] <= 3.025000) {
        return [0.0, 0.4, 0.6];
      } else {
        return [0.0, 0.0, 1.0];
      }
    } else {
      return [0.0, 0.0, 1.0];
    }
  }
}

function riskLevel3_tree_1(f) {
  if (f['log_screen_time'] <= 2.194443) {
    if (f['notification_load_index'] <= 35.052679) {
      if (f['social_media_share'] <= 0.596097) {
        if (f['weekend_screen_time'] <= 7.585000) {
          if (f['weekend_escalation'] <= 0.356243) {
            if (f['gaming_hours'] <= 3.365000) {
              if (f['log_screen_time'] <= 1.929345) {
                if (f['daily_screen_time_hours'] <= 5.625000) {
                  return [0.28888888888888886, 0.7111111111111111, 0.0];
                } else {
                  return [0.6470588235294118, 0.35294117647058826, 0.0];
                }
              } else {
                if (f['sleep_hours'] <= 6.230000) {
                  return [0.0, 0.8604651162790697, 0.13953488372093023];
                } else {
                  return [0.0, 0.4482758620689655, 0.5517241379310345];
                }
              }
            } else {
              if (f['stress_x_screen'] <= 3.970000) {
                if (f['notification_load_index'] <= 13.664790) {
                  return [0.3333333333333333, 0.0, 0.6666666666666666];
                } else {
                  return [0.09090909090909091, 0.9090909090909091, 0.0];
                }
              } else {
                if (f['app_opens_per_day'] <= 108.500000) {
                  return [0.42857142857142855, 0.42857142857142855, 0.14285714285714285];
                } else {
                  return [0.9285714285714286, 0.0, 0.07142857142857142];
                }
              }
            }
          } else {
            if (f['app_opens_per_day'] <= 139.500000) {
              if (f['notification_load_index'] <= 19.055813) {
                if (f['gaming_hours'] <= 0.900000) {
                  return [0.3333333333333333, 0.6666666666666666, 0.0];
                } else {
                  return [0.9069767441860465, 0.09302325581395349, 0.0];
                }
              } else {
                if (f['weekend_escalation'] <= 0.609010) {
                  return [0.43478260869565216, 0.5652173913043478, 0.0];
                } else {
                  return [0.782608695652174, 0.21739130434782608, 0.0];
                }
              }
            } else {
              if (f['entertainment_share'] <= 0.480843) {
                if (f['sleep_deficit'] <= 0.725000) {
                  return [0.3333333333333333, 0.6666666666666666, 0.0];
                } else {
                  return [1.0, 0.0, 0.0];
                }
              } else {
                if (f['stress_x_screen'] <= 7.590000) {
                  return [0.4117647058823529, 0.5882352941176471, 0.0];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              }
            }
          }
        } else {
          if (f['productivity_share'] <= 0.241140) {
            if (f['log_screen_time'] <= 1.938725) {
              if (f['notif_x_switch'] <= 2.676598) {
                if (f['age'] <= 24.000000) {
                  return [0.16666666666666666, 0.8333333333333334, 0.0];
                } else {
                  return [1.0, 0.0, 0.0];
                }
              } else {
                return [1.0, 0.0, 0.0];
              }
            } else {
              if (f['notification_load_index'] <= 3.128287) {
                return [0.0, 1.0, 0.0];
              } else {
                if (f['app_opens_per_day'] <= 61.000000) {
                  return [0.0, 0.1702127659574468, 0.8297872340425532];
                } else {
                  return [0.0, 0.4452054794520548, 0.5547945205479452];
                }
              }
            }
          } else {
            if (f['weekend_escalation'] <= 0.350034) {
              if (f['weekend_x_screen'] <= 0.695000) {
                if (f['screen_sleep_ratio'] <= 1.071694) {
                  return [0.0, 0.2, 0.8];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              } else {
                if (f['stress_x_screen'] <= 13.830000) {
                  return [0.01, 0.5833333333333334, 0.4066666666666667];
                } else {
                  return [0.0, 0.3626373626373626, 0.6373626373626373];
                }
              }
            } else {
              if (f['daily_screen_time_hours'] <= 6.020000) {
                if (f['app_switch_index'] <= 25.504366) {
                  return [0.22413793103448276, 0.7758620689655172, 0.0];
                } else {
                  return [1.0, 0.0, 0.0];
                }
              } else {
                if (f['sleep_hours'] <= 4.785000) {
                  return [0.0, 0.375, 0.625];
                } else {
                  return [0.0, 0.7714285714285715, 0.22857142857142856];
                }
              }
            }
          }
        }
      } else {
        if (f['social_media_hours'] <= 4.005000) {
          if (f['weekend_x_screen'] <= 0.800000) {
            if (f['log_screen_time'] <= 1.746967) {
              return [1.0, 0.0, 0.0];
            } else {
              return [0.6666666666666666, 0.3333333333333333, 0.0];
            }
          } else {
            if (f['daily_screen_time_hours'] <= 6.005000) {
              if (f['notifications_per_day'] <= 95.500000) {
                if (f['gaming_hours'] <= 0.360000) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.5847457627118644, 0.4152542372881356, 0.0];
                }
              } else {
                if (f['gaming_hours'] <= 1.955000) {
                  return [0.5, 0.5, 0.0];
                } else {
                  return [0.08108108108108109, 0.918918918918919, 0.0];
                }
              }
            } else {
              if (f['sleep_deficit'] <= 1.345000) {
                return [0.0, 0.0, 1.0];
              } else {
                return [0.0, 0.7142857142857143, 0.2857142857142857];
              }
            }
          }
        } else {
          return [0.0, 0.0, 1.0];
        }
      }
    } else {
      if (f['social_media_share'] <= 0.931949) {
        if (f['social_media_share'] <= 0.704011) {
          if (f['log_screen_time'] <= 1.948048) {
            if (f['entertainment_share'] <= 0.677664) {
              if (f['log_screen_time'] <= 1.468972) {
                return [0.0, 1.0, 0.0];
              } else {
                if (f['work_study_hours'] <= 4.585000) {
                  return [0.847457627118644, 0.15254237288135594, 0.0];
                } else {
                  return [0.5, 0.5, 0.0];
                }
              }
            } else {
              if (f['gaming_hours'] <= 1.330000) {
                if (f['notification_load_index'] <= 65.196461) {
                  return [0.16129032258064516, 0.8387096774193549, 0.0];
                } else {
                  return [0.75, 0.25, 0.0];
                }
              } else {
                if (f['weekend_x_screen'] <= 2.880000) {
                  return [0.5475113122171946, 0.45248868778280543, 0.0];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              }
            }
          } else {
            if (f['weekend_screen_time'] <= 8.735000) {
              if (f['sleep_deficit'] <= 0.995000) {
                return [0.0, 1.0, 0.0];
              } else {
                if (f['stress_x_screen'] <= 6.595000) {
                  return [0.0, 0.7058823529411765, 0.29411764705882354];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              }
            } else {
              return [0.0, 0.125, 0.875];
            }
          }
        } else {
          if (f['screen_sleep_ratio'] <= 0.926342) {
            if (f['weekend_screen_time'] <= 6.060000) {
              if (f['gaming_share'] <= 0.803234) {
                if (f['sleep_hours'] <= 6.045000) {
                  return [0.9444444444444444, 0.05555555555555555, 0.0];
                } else {
                  return [0.35294117647058826, 0.5, 0.14705882352941177];
                }
              } else {
                if (f['gender_enc'] <= 1.500000) {
                  return [0.058823529411764705, 0.9411764705882353, 0.0];
                } else {
                  return [0.6666666666666666, 0.3333333333333333, 0.0];
                }
              }
            } else {
              if (f['daily_screen_time_hours'] <= 5.085000) {
                if (f['app_opens_per_day'] <= 139.000000) {
                  return [0.2631578947368421, 0.6842105263157895, 0.05263157894736842];
                } else {
                  return [1.0, 0.0, 0.0];
                }
              } else {
                if (f['notification_load_index'] <= 37.509027) {
                  return [0.4, 0.0, 0.6];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              }
            }
          } else {
            if (f['gaming_hours'] <= 0.885000) {
              if (f['gaming_hours'] <= 0.470000) {
                return [0.0, 0.0, 1.0];
              } else {
                return [0.0, 0.6666666666666666, 0.3333333333333333];
              }
            } else {
              return [0.0, 0.0, 1.0];
            }
          }
        }
      } else {
        if (f['log_screen_time'] <= 1.494026) {
          if (f['gaming_share'] <= 0.839002) {
            if (f['social_media_hours'] <= 4.015000) {
              if (f['gaming_share'] <= 0.202670) {
                return [1.0, 0.0, 0.0];
              } else {
                if (f['productivity_share'] <= 0.501178) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.6, 0.4, 0.0];
                }
              }
            } else {
              return [0.0, 0.0, 1.0];
            }
          } else {
            if (f['notifications_per_day'] <= 141.500000) {
              return [1.0, 0.0, 0.0];
            } else {
              if (f['sleep_deficit'] <= 0.200000) {
                if (f['social_media_hours'] <= 4.640000) {
                  return [1.0, 0.0, 0.0];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              } else {
                if (f['low_sleep'] <= 0.500000) {
                  return [0.0, 0.45454545454545453, 0.5454545454545454];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              }
            }
          }
        } else {
          if (f['daily_screen_time_hours'] <= 3.985000) {
            if (f['sleep_hours'] <= 7.255000) {
              if (f['notif_x_switch'] <= 9.247207) {
                return [0.0, 0.0, 1.0];
              } else {
                if (f['social_media_hours'] <= 4.000000) {
                  return [0.6666666666666666, 0.3333333333333333, 0.0];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              }
            } else {
              if (f['sleep_deficit'] <= 0.075000) {
                if (f['social_media_hours'] <= 4.010000) {
                  return [0.14285714285714285, 0.8571428571428571, 0.0];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              } else {
                return [0.0, 1.0, 0.0];
              }
            }
          } else {
            return [0.0, 0.0, 1.0];
          }
        }
      }
    }
  } else {
    if (f['daily_screen_time_hours'] <= 7.995000) {
      if (f['screen_sleep_ratio'] <= 1.246687) {
        return [0.0, 0.0, 1.0];
      } else {
        return [0.0, 0.3333333333333333, 0.6666666666666666];
      }
    } else {
      return [0.0, 0.0, 1.0];
    }
  }
}

function riskLevel3_tree_2(f) {
  if (f['weekend_escalation'] <= 0.349882) {
    if (f['productivity_share'] <= 0.644988) {
      if (f['notif_x_switch'] <= 4.025422) {
        if (f['daily_screen_time_hours'] <= 7.885000) {
          if (f['social_media_share'] <= 0.578114) {
            if (f['daily_screen_time_hours'] <= 6.220000) {
              if (f['app_switch_index'] <= 29.037605) {
                if (f['app_switch_index'] <= 7.542970) {
                  return [0.6190476190476191, 0.38095238095238093, 0.0];
                } else {
                  return [0.1935483870967742, 0.8064516129032258, 0.0];
                }
              } else {
                if (f['app_opens_per_day'] <= 177.500000) {
                  return [1.0, 0.0, 0.0];
                } else {
                  return [0.25, 0.25, 0.5];
                }
              }
            } else {
              if (f['social_media_hours'] <= 3.980000) {
                if (f['screen_sleep_ratio'] <= 0.845831) {
                  return [0.0, 0.1111111111111111, 0.8888888888888888];
                } else {
                  return [0.0, 0.5116279069767442, 0.4883720930232558];
                }
              } else {
                return [0.0, 0.0, 1.0];
              }
            }
          } else {
            if (f['social_media_hours'] <= 4.005000) {
              if (f['app_switch_index'] <= 6.591191) {
                return [1.0, 0.0, 0.0];
              } else {
                if (f['app_opens_per_day'] <= 45.500000) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.7407407407407407, 0.25925925925925924, 0.0];
                }
              }
            } else {
              return [0.0, 0.0, 1.0];
            }
          }
        } else {
          if (f['log_screen_time'] <= 2.196669) {
            if (f['app_switch_index'] <= 11.883551) {
              return [0.0, 0.0, 1.0];
            } else {
              if (f['social_media_hours'] <= 3.930000) {
                if (f['stress_level_enc'] <= 0.500000) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              } else {
                return [0.0, 0.0, 1.0];
              }
            }
          } else {
            return [0.0, 0.0, 1.0];
          }
        }
      } else {
        if (f['social_media_share'] <= 0.878449) {
          if (f['notification_load_index'] <= 30.794676) {
            if (f['notifications_per_day'] <= 148.500000) {
              if (f['stress_level_enc'] <= 0.500000) {
                if (f['weekend_escalation'] <= 0.153172) {
                  return [0.6666666666666666, 0.3333333333333333, 0.0];
                } else {
                  return [0.08333333333333333, 0.3333333333333333, 0.5833333333333334];
                }
              } else {
                if (f['app_opens_per_day'] <= 118.000000) {
                  return [0.6666666666666666, 0.3333333333333333, 0.0];
                } else {
                  return [0.17857142857142858, 0.7857142857142857, 0.03571428571428571];
                }
              }
            } else {
              if (f['sleep_hours'] <= 8.595000) {
                if (f['app_opens_per_day'] <= 116.500000) {
                  return [0.0, 0.6, 0.4];
                } else {
                  return [0.0, 0.06153846153846154, 0.9384615384615385];
                }
              } else {
                if (f['work_study_share'] <= 0.191613) {
                  return [0.0, 0.16666666666666666, 0.8333333333333334];
                } else {
                  return [0.0, 0.75, 0.25];
                }
              }
            }
          } else {
            if (f['age'] <= 31.500000) {
              if (f['daily_screen_time_hours'] <= 6.065000) {
                if (f['social_media_hours'] <= 4.060000) {
                  return [0.3559322033898305, 0.6440677966101694, 0.0];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              } else {
                if (f['social_media_hours'] <= 1.250000) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.0, 0.3191489361702128, 0.6808510638297872];
                }
              }
            } else {
              if (f['gaming_hours'] <= 3.255000) {
                if (f['notifications_per_day'] <= 230.500000) {
                  return [0.8666666666666667, 0.0, 0.13333333333333333];
                } else {
                  return [0.3333333333333333, 0.0, 0.6666666666666666];
                }
              } else {
                return [0.2, 0.8, 0.0];
              }
            }
          }
        } else {
          if (f['weekend_screen_time'] <= 4.650000) {
            if (f['sleep_deficit'] <= 0.350000) {
              if (f['social_media_hours'] <= 3.830000) {
                return [1.0, 0.0, 0.0];
              } else {
                return [0.0, 0.0, 1.0];
              }
            } else {
              if (f['social_media_hours'] <= 4.010000) {
                return [0.16666666666666666, 0.8333333333333334, 0.0];
              } else {
                return [0.0, 0.0, 1.0];
              }
            }
          } else {
            return [0.0, 0.0, 1.0];
          }
        }
      }
    } else {
      if (f['log_screen_time'] <= 1.950186) {
        if (f['social_media_hours'] <= 4.015000) {
          if (f['work_study_share'] <= 0.715863) {
            if (f['work_study_share'] <= 0.659477) {
              if (f['daily_screen_time_hours'] <= 4.985000) {
                return [1.0, 0.0, 0.0];
              } else {
                return [0.0, 1.0, 0.0];
              }
            } else {
              if (f['work_study_hours'] <= 2.850000) {
                return [0.4, 0.6, 0.0];
              } else {
                if (f['gaming_hours'] <= 1.615000) {
                  return [0.7272727272727273, 0.2727272727272727, 0.0];
                } else {
                  return [0.9333333333333333, 0.06666666666666667, 0.0];
                }
              }
            }
          } else {
            if (f['app_opens_per_day'] <= 142.500000) {
              if (f['daily_screen_time_hours'] <= 4.075000) {
                if (f['sleep_deficit'] <= 0.700000) {
                  return [0.45161290322580644, 0.5483870967741935, 0.0];
                } else {
                  return [0.9024390243902439, 0.0975609756097561, 0.0];
                }
              } else {
                if (f['notif_x_switch'] <= 7.828445) {
                  return [0.392, 0.608, 0.0];
                } else {
                  return [0.8, 0.2, 0.0];
                }
              }
            } else {
              if (f['stress_x_screen'] <= 8.710000) {
                if (f['daily_screen_time_hours'] <= 5.460000) {
                  return [0.15384615384615385, 0.8461538461538461, 0.0];
                } else {
                  return [1.0, 0.0, 0.0];
                }
              } else {
                if (f['weekend_escalation'] <= 0.200677) {
                  return [0.8333333333333334, 0.16666666666666666, 0.0];
                } else {
                  return [0.5, 0.5, 0.0];
                }
              }
            }
          }
        } else {
          return [0.0, 0.0, 1.0];
        }
      } else {
        if (f['social_media_share'] <= 0.631450) {
          if (f['sleep_deficit'] <= 1.180000) {
            if (f['log_screen_time'] <= 2.197780) {
              if (f['notification_load_index'] <= 4.292155) {
                return [0.0, 1.0, 0.0];
              } else {
                if (f['daily_screen_time_hours'] <= 6.285000) {
                  return [0.0, 0.6428571428571429, 0.35714285714285715];
                } else {
                  return [0.0, 0.2696629213483146, 0.7303370786516854];
                }
              }
            } else {
              return [0.0, 0.0, 1.0];
            }
          } else {
            if (f['stress_x_screen'] <= 7.885000) {
              if (f['log_screen_time'] <= 2.199267) {
                if (f['screen_sleep_ratio'] <= 1.271330) {
                  return [0.0, 0.9411764705882353, 0.058823529411764705];
                } else {
                  return [0.0, 0.5185185185185185, 0.48148148148148145];
                }
              } else {
                return [0.0, 0.0, 1.0];
              }
            } else {
              if (f['gender_enc'] <= 0.500000) {
                return [0.0, 0.8333333333333334, 0.16666666666666666];
              } else {
                if (f['log_screen_time'] <= 2.095413) {
                  return [0.0, 0.3333333333333333, 0.6666666666666666];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              }
            }
          }
        } else {
          return [0.0, 0.0, 1.0];
        }
      }
    }
  } else {
    if (f['social_media_share'] <= 0.679110) {
      if (f['log_screen_time'] <= 1.948048) {
        if (f['stress_x_screen'] <= 11.030000) {
          if (f['app_switch_index'] <= 18.811389) {
            if (f['social_media_share'] <= 0.163165) {
              if (f['app_switch_index'] <= 6.782408) {
                return [0.3333333333333333, 0.6666666666666666, 0.0];
              } else {
                return [0.0, 1.0, 0.0];
              }
            } else {
              if (f['social_media_hours'] <= 1.135000) {
                if (f['notif_x_switch'] <= 2.787223) {
                  return [0.9473684210526315, 0.05263157894736842, 0.0];
                } else {
                  return [0.2857142857142857, 0.7142857142857143, 0.0];
                }
              } else {
                if (f['gaming_share'] <= 0.209695) {
                  return [0.10256410256410256, 0.8974358974358975, 0.0];
                } else {
                  return [0.4368932038834951, 0.5631067961165048, 0.0];
                }
              }
            }
          } else {
            if (f['gaming_hours'] <= 0.175000) {
              if (f['notification_load_index'] <= 23.417913) {
                return [0.0, 1.0, 0.0];
              } else {
                return [0.2, 0.8, 0.0];
              }
            } else {
              if (f['social_media_hours'] <= 0.935000) {
                if (f['notifications_per_day'] <= 150.000000) {
                  return [0.8888888888888888, 0.1111111111111111, 0.0];
                } else {
                  return [0.6052631578947368, 0.39473684210526316, 0.0];
                }
              } else {
                if (f['screen_sleep_ratio'] <= 0.657984) {
                  return [0.43956043956043955, 0.5604395604395604, 0.0];
                } else {
                  return [0.625, 0.375, 0.0];
                }
              }
            }
          }
        } else {
          if (f['weekend_x_screen'] <= 2.595000) {
            if (f['social_media_hours'] <= 1.305000) {
              return [1.0, 0.0, 0.0];
            } else {
              if (f['social_media_share'] <= 0.294517) {
                return [0.3333333333333333, 0.6666666666666666, 0.0];
              } else {
                return [0.6666666666666666, 0.3333333333333333, 0.0];
              }
            }
          } else {
            return [1.0, 0.0, 0.0];
          }
        }
      } else {
        if (f['daily_screen_time_hours'] <= 6.925000) {
          if (f['notifications_per_day'] <= 61.000000) {
            if (f['weekend_screen_time'] <= 8.970000) {
              return [0.0, 0.0, 1.0];
            } else {
              if (f['gender_enc'] <= 1.500000) {
                return [0.0, 0.0, 1.0];
              } else {
                return [0.0, 0.7142857142857143, 0.2857142857142857];
              }
            }
          } else {
            if (f['weekend_screen_time'] <= 9.100000) {
              if (f['social_media_share'] <= 0.227966) {
                if (f['social_media_share'] <= 0.130876) {
                  return [0.0, 0.75, 0.25];
                } else {
                  return [0.0, 0.1, 0.9];
                }
              } else {
                if (f['log_screen_time'] <= 1.975468) {
                  return [0.0, 0.8333333333333334, 0.16666666666666666];
                } else {
                  return [0.0, 0.5, 0.5];
                }
              }
            } else {
              if (f['entertainment_share'] <= 0.926316) {
                if (f['sleep_deficit'] <= 0.065000) {
                  return [0.0, 0.875, 0.125];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              } else {
                return [0.0, 0.5, 0.5];
              }
            }
          }
        } else {
          if (f['entertainment_share'] <= 0.633828) {
            if (f['work_study_hours'] <= 4.885000) {
              if (f['gaming_share'] <= 0.270530) {
                if (f['gender_enc'] <= 1.500000) {
                  return [0.0, 0.5, 0.5];
                } else {
                  return [0.0, 0.0625, 0.9375];
                }
              } else {
                return [0.0, 1.0, 0.0];
              }
            } else {
              if (f['academic_work_impact_enc'] <= 0.500000) {
                return [0.0, 0.75, 0.25];
              } else {
                return [0.0, 1.0, 0.0];
              }
            }
          } else {
            if (f['gaming_hours'] <= 3.795000) {
              if (f['work_study_share'] <= 0.331133) {
                if (f['gender_enc'] <= 1.500000) {
                  return [0.0, 0.09090909090909091, 0.9090909090909091];
                } else {
                  return [0.0, 0.8, 0.2];
                }
              } else {
                return [0.0, 0.0, 1.0];
              }
            } else {
              return [0.0, 0.6666666666666666, 0.3333333333333333];
            }
          }
        }
      }
    } else {
      if (f['app_switch_index'] <= 38.025963) {
        if (f['notification_load_index'] <= 23.589226) {
          if (f['social_media_share'] <= 0.950561) {
            if (f['sleep_hours'] <= 7.145000) {
              if (f['gaming_share'] <= 0.626982) {
                if (f['social_media_hours'] <= 3.995000) {
                  return [0.6923076923076923, 0.3076923076923077, 0.0];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              } else {
                return [0.75, 0.125, 0.125];
              }
            } else {
              if (f['productivity_share'] <= 0.342087) {
                if (f['social_media_hours'] <= 3.830000) {
                  return [0.16666666666666666, 0.8333333333333334, 0.0];
                } else {
                  return [0.0, 0.3333333333333333, 0.6666666666666666];
                }
              } else {
                if (f['screen_sleep_ratio'] <= 0.627121) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              }
            }
          } else {
            if (f['daily_screen_time_hours'] <= 3.455000) {
              if (f['app_opens_per_day'] <= 30.000000) {
                return [0.0, 0.2, 0.8];
              } else {
                if (f['app_opens_per_day'] <= 81.000000) {
                  return [0.0, 0.0, 1.0];
                } else {
                  return [0.1111111111111111, 0.0, 0.8888888888888888];
                }
              }
            } else {
              return [0.0, 0.0, 1.0];
            }
          }
        } else {
          if (f['social_media_share'] <= 0.984224) {
            if (f['weekend_escalation'] <= 0.537309) {
              if (f['log_screen_time'] <= 1.709234) {
                if (f['stress_level_enc'] <= 0.500000) {
                  return [0.23076923076923078, 0.7692307692307693, 0.0];
                } else {
                  return [0.6470588235294118, 0.29411764705882354, 0.058823529411764705];
                }
              } else {
                if (f['social_media_hours'] <= 3.990000) {
                  return [0.16666666666666666, 0.8333333333333334, 0.0];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              }
            } else {
              if (f['social_media_hours'] <= 4.060000) {
                if (f['age'] <= 33.500000) {
                  return [0.4727272727272727, 0.5272727272727272, 0.0];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              } else {
                return [0.0, 0.0, 1.0];
              }
            }
          } else {
            if (f['app_opens_per_day'] <= 27.500000) {
              if (f['weekend_screen_time'] <= 5.405000) {
                return [0.0, 1.0, 0.0];
              } else {
                return [0.0, 0.0, 1.0];
              }
            } else {
              if (f['gaming_share'] <= 0.853685) {
                if (f['social_media_hours'] <= 3.980000) {
                  return [0.7142857142857143, 0.2857142857142857, 0.0];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              } else {
                if (f['log_screen_time'] <= 1.479119) {
                  return [0.375, 0.125, 0.5];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              }
            }
          }
        }
      } else {
        if (f['sleep_hours'] <= 8.415000) {
          if (f['productivity_share'] <= 0.329464) {
            if (f['work_study_hours'] <= 1.090000) {
              if (f['gaming_share'] <= 0.764572) {
                return [0.0, 1.0, 0.0];
              } else {
                return [0.2, 0.0, 0.8];
              }
            } else {
              return [0.0, 0.0, 1.0];
            }
          } else {
            if (f['stress_x_screen'] <= 5.125000) {
              if (f['daily_screen_time_hours'] <= 3.055000) {
                return [0.0, 0.0, 1.0];
              } else {
                if (f['notif_x_switch'] <= 21.759903) {
                  return [0.3, 0.2, 0.5];
                } else {
                  return [0.8076923076923077, 0.19230769230769232, 0.0];
                }
              }
            } else {
              if (f['work_study_hours'] <= 4.150000) {
                return [0.0, 0.8571428571428571, 0.14285714285714285];
              } else {
                return [0.0, 0.16666666666666666, 0.8333333333333334];
              }
            }
          }
        } else {
          return [0.0, 0.0, 1.0];
        }
      }
    }
  }
}

function riskLevel3_tree_3(f) {
  if (f['screen_sleep_ratio'] <= 0.949419) {
    if (f['social_media_share'] <= 0.779460) {
      if (f['screen_sleep_ratio'] <= 0.785184) {
        if (f['app_opens_per_day'] <= 29.500000) {
          if (f['gaming_hours'] <= 2.325000) {
            if (f['academic_work_impact_enc'] <= 0.500000) {
              if (f['screen_sleep_ratio'] <= 0.536691) {
                return [0.3333333333333333, 0.6666666666666666, 0.0];
              } else {
                if (f['social_media_hours'] <= 2.875000) {
                  return [1.0, 0.0, 0.0];
                } else {
                  return [0.3333333333333333, 0.3333333333333333, 0.3333333333333333];
                }
              }
            } else {
              if (f['gaming_share'] <= 0.094676) {
                if (f['sleep_hours'] <= 7.180000) {
                  return [0.3333333333333333, 0.6666666666666666, 0.0];
                } else {
                  return [0.2, 0.0, 0.8];
                }
              } else {
                if (f['weekend_x_screen'] <= 2.310000) {
                  return [0.5, 0.5, 0.0];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              }
            }
          } else {
            if (f['age'] <= 26.500000) {
              return [1.0, 0.0, 0.0];
            } else {
              if (f['weekend_x_screen'] <= 1.465000) {
                if (f['gender_enc'] <= 0.500000) {
                  return [1.0, 0.0, 0.0];
                } else {
                  return [0.2, 0.8, 0.0];
                }
              } else {
                return [1.0, 0.0, 0.0];
              }
            }
          }
        } else {
          if (f['productivity_share'] <= 0.691508) {
            if (f['stress_x_screen'] <= 12.750000) {
              if (f['daily_screen_time_hours'] <= 5.410000) {
                if (f['weekend_screen_time'] <= 7.095000) {
                  return [0.3446601941747573, 0.6553398058252428, 0.0];
                } else {
                  return [0.607843137254902, 0.3529411764705883, 0.03921568627450981];
                }
              } else {
                if (f['social_media_share'] <= 0.723785) {
                  return [0.05825242718446602, 0.8155339805825242, 0.1262135922330097];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              }
            } else {
              return [0.0, 0.0, 1.0];
            }
          } else {
            if (f['work_study_share'] <= 0.708664) {
              if (f['screen_sleep_ratio'] <= 0.644817) {
                return [0.6666666666666666, 0.3333333333333333, 0.0];
              } else {
                return [1.0, 0.0, 0.0];
              }
            } else {
              if (f['social_media_share'] <= 0.240004) {
                if (f['notif_x_switch'] <= 0.858220) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.7313432835820896, 0.26865671641791045, 0.0];
                }
              } else {
                if (f['notification_load_index'] <= 39.187815) {
                  return [0.3121693121693122, 0.634920634920635, 0.052910052910052914];
                } else {
                  return [0.5529411764705883, 0.43529411764705883, 0.011764705882352941];
                }
              }
            }
          }
        }
      } else {
        if (f['weekend_screen_time'] <= 7.915000) {
          if (f['weekend_x_screen'] <= 1.750000) {
            if (f['sleep_hours'] <= 7.265000) {
              if (f['work_study_hours'] <= 1.340000) {
                return [0.0, 1.0, 0.0];
              } else {
                if (f['productivity_share'] <= 0.551342) {
                  return [0.32142857142857145, 0.42857142857142855, 0.25];
                } else {
                  return [0.25555555555555554, 0.7222222222222222, 0.022222222222222223];
                }
              }
            } else {
              if (f['notifications_per_day'] <= 101.000000) {
                if (f['work_study_share'] <= 0.766771) {
                  return [0.13333333333333333, 0.06666666666666667, 0.8];
                } else {
                  return [0.0, 0.75, 0.25];
                }
              } else {
                if (f['gaming_share'] <= 0.290762) {
                  return [0.0, 0.5, 0.5];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              }
            }
          } else {
            if (f['notifications_per_day'] <= 124.000000) {
              if (f['entertainment_share'] <= 0.511573) {
                return [1.0, 0.0, 0.0];
              } else {
                if (f['notifications_per_day'] <= 79.500000) {
                  return [0.4, 0.6, 0.0];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              }
            } else {
              if (f['entertainment_share'] <= 0.685064) {
                if (f['sleep_hours'] <= 6.095000) {
                  return [1.0, 0.0, 0.0];
                } else {
                  return [0.75, 0.25, 0.0];
                }
              } else {
                if (f['social_media_hours'] <= 3.460000) {
                  return [0.75, 0.25, 0.0];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              }
            }
          }
        } else {
          if (f['social_media_share'] <= 0.562246) {
            if (f['daily_screen_time_hours'] <= 6.010000) {
              if (f['weekend_x_screen'] <= 2.615000) {
                if (f['age'] <= 26.500000) {
                  return [0.6666666666666666, 0.3333333333333333, 0.0];
                } else {
                  return [1.0, 0.0, 0.0];
                }
              } else {
                return [0.4, 0.6, 0.0];
              }
            } else {
              if (f['notification_load_index'] <= 34.932901) {
                if (f['notif_x_switch'] <= 3.639853) {
                  return [0.0, 0.3064516129032258, 0.6935483870967742];
                } else {
                  return [0.0, 0.6046511627906976, 0.3953488372093023];
                }
              } else {
                return [0.0, 1.0, 0.0];
              }
            }
          } else {
            if (f['weekend_screen_time'] <= 8.315000) {
              if (f['social_media_hours'] <= 3.990000) {
                if (f['notifications_per_day'] <= 129.000000) {
                  return [0.75, 0.25, 0.0];
                } else {
                  return [0.3333333333333333, 0.3333333333333333, 0.3333333333333333];
                }
              } else {
                return [0.0, 0.0, 1.0];
              }
            } else {
              if (f['gaming_share'] <= 0.528080) {
                return [0.0, 0.0, 1.0];
              } else {
                return [0.0, 0.2857142857142857, 0.7142857142857143];
              }
            }
          }
        }
      }
    } else {
      if (f['gaming_share'] <= 0.910350) {
        if (f['social_media_hours'] <= 4.000000) {
          if (f['app_switch_index'] <= 31.985916) {
            if (f['gaming_hours'] <= 3.255000) {
              if (f['screen_sleep_ratio'] <= 0.485823) {
                if (f['notif_x_switch'] <= 12.470961) {
                  return [0.34615384615384615, 0.6538461538461539, 0.0];
                } else {
                  return [1.0, 0.0, 0.0];
                }
              } else {
                if (f['work_study_hours'] <= 1.555000) {
                  return [0.3333333333333333, 0.6666666666666666, 0.0];
                } else {
                  return [0.85, 0.15, 0.0];
                }
              }
            } else {
              return [0.0, 1.0, 0.0];
            }
          } else {
            if (f['notifications_per_day'] <= 177.500000) {
              if (f['stress_x_screen'] <= 3.880000) {
                if (f['age'] <= 29.500000) {
                  return [0.3333333333333333, 0.6666666666666666, 0.0];
                } else {
                  return [0.9090909090909091, 0.09090909090909091, 0.0];
                }
              } else {
                if (f['work_study_hours'] <= 3.700000) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.25, 0.75, 0.0];
                }
              }
            } else {
              if (f['notif_x_switch'] <= 28.660059) {
                return [1.0, 0.0, 0.0];
              } else {
                return [0.5, 0.5, 0.0];
              }
            }
          }
        } else {
          return [0.0, 0.0, 1.0];
        }
      } else {
        if (f['gaming_hours'] <= 3.115000) {
          if (f['social_media_hours'] <= 4.370000) {
            if (f['gaming_share'] <= 0.951771) {
              return [0.5555555555555556, 0.4444444444444444, 0.0];
            } else {
              return [0.1, 0.9, 0.0];
            }
          } else {
            return [0.0, 0.0, 1.0];
          }
        } else {
          if (f['social_media_hours'] <= 4.025000) {
            if (f['work_study_share'] <= 0.621198) {
              if (f['gaming_share'] <= 0.969979) {
                return [1.0, 0.0, 0.0];
              } else {
                if (f['weekend_x_screen'] <= 0.930000) {
                  return [0.5, 0.5, 0.0];
                } else {
                  return [0.6, 0.4, 0.0];
                }
              }
            } else {
              if (f['sleep_deficit'] <= 0.550000) {
                return [0.0, 1.0, 0.0];
              } else {
                if (f['screen_sleep_ratio'] <= 0.538473) {
                  return [1.0, 0.0, 0.0];
                } else {
                  return [0.18181818181818182, 0.8181818181818182, 0.0];
                }
              }
            }
          } else {
            return [0.0, 0.0, 1.0];
          }
        }
      }
    }
  } else {
    if (f['weekend_screen_time'] <= 8.985000) {
      if (f['social_media_hours'] <= 4.005000) {
        if (f['daily_screen_time_hours'] <= 6.005000) {
          if (f['notif_x_switch'] <= 10.696168) {
            if (f['age'] <= 30.500000) {
              if (f['notification_load_index'] <= 40.143051) {
                if (f['social_media_hours'] <= 2.675000) {
                  return [0.8723404255319149, 0.1276595744680851, 0.0];
                } else {
                  return [0.5357142857142857, 0.4642857142857143, 0.0];
                }
              } else {
                return [0.14285714285714285, 0.8571428571428571, 0.0];
              }
            } else {
              if (f['sleep_hours'] <= 5.175000) {
                if (f['stress_level_enc'] <= 1.500000) {
                  return [0.25, 0.75, 0.0];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              } else {
                if (f['work_study_hours'] <= 4.345000) {
                  return [0.8571428571428571, 0.14285714285714285, 0.0];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              }
            }
          } else {
            if (f['sleep_hours'] <= 4.890000) {
              if (f['screen_sleep_ratio'] <= 0.997767) {
                return [0.0, 1.0, 0.0];
              } else {
                return [0.5, 0.5, 0.0];
              }
            } else {
              return [0.0, 1.0, 0.0];
            }
          }
        } else {
          if (f['sleep_deficit'] <= 1.045000) {
            if (f['app_switch_index'] <= 18.630277) {
              if (f['weekend_x_screen'] <= 0.695000) {
                return [0.0, 0.0, 1.0];
              } else {
                if (f['notification_load_index'] <= 14.421181) {
                  return [0.0, 0.8125, 0.1875];
                } else {
                  return [0.0, 0.2727272727272727, 0.7272727272727273];
                }
              }
            } else {
              if (f['entertainment_share'] <= 0.604136) {
                return [0.0, 0.16666666666666666, 0.8333333333333334];
              } else {
                return [0.0, 0.0, 1.0];
              }
            }
          } else {
            if (f['work_study_hours'] <= 1.215000) {
              if (f['notification_load_index'] <= 18.578872) {
                if (f['productivity_share'] <= 0.140789) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              } else {
                return [0.0, 0.0, 1.0];
              }
            } else {
              if (f['weekend_escalation'] <= 0.086611) {
                if (f['notification_load_index'] <= 14.530674) {
                  return [0.0, 0.42857142857142855, 0.5714285714285714];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              } else {
                if (f['sleep_deficit'] <= 2.935000) {
                  return [0.0, 0.6909090909090909, 0.3090909090909091];
                } else {
                  return [0.0, 0.1111111111111111, 0.8888888888888888];
                }
              }
            }
          }
        }
      } else {
        return [0.0, 0.0, 1.0];
      }
    } else {
      if (f['log_screen_time'] <= 2.194443) {
        if (f['entertainment_share'] <= 0.810808) {
          if (f['daily_screen_time_hours'] <= 6.605000) {
            return [0.0, 1.0, 0.0];
          } else {
            if (f['stress_level_enc'] <= 1.500000) {
              if (f['social_media_hours'] <= 3.770000) {
                if (f['age'] <= 24.500000) {
                  return [0.0, 0.3541666666666667, 0.6458333333333334];
                } else {
                  return [0.0, 0.6666666666666666, 0.3333333333333333];
                }
              } else {
                if (f['daily_screen_time_hours'] <= 7.010000) {
                  return [0.0, 0.4, 0.6];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              }
            } else {
              if (f['gaming_share'] <= 0.049766) {
                return [0.0, 0.16666666666666666, 0.8333333333333334];
              } else {
                if (f['sleep_hours'] <= 6.440000) {
                  return [0.0, 0.8333333333333334, 0.16666666666666666];
                } else {
                  return [0.0, 0.5714285714285714, 0.42857142857142855];
                }
              }
            }
          }
        } else {
          if (f['gaming_hours'] <= 3.400000) {
            if (f['weekend_x_screen'] <= 1.990000) {
              if (f['daily_screen_time_hours'] <= 7.360000) {
                return [0.0, 0.2, 0.8];
              } else {
                return [0.0, 0.0, 1.0];
              }
            } else {
              return [0.0, 0.0, 1.0];
            }
          } else {
            if (f['app_opens_per_day'] <= 54.500000) {
              if (f['social_media_share'] <= 0.539437) {
                return [0.0, 0.8571428571428571, 0.14285714285714285];
              } else {
                return [0.0, 0.0, 1.0];
              }
            } else {
              if (f['notifications_per_day'] <= 49.500000) {
                return [0.0, 0.3333333333333333, 0.6666666666666666];
              } else {
                return [0.0, 0.0, 1.0];
              }
            }
          }
        }
      } else {
        return [0.0, 0.0, 1.0];
      }
    }
  }
}

function riskLevel3_tree_4(f) {
  if (f['daily_screen_time_hours'] <= 7.935000) {
    if (f['log_screen_time'] <= 1.946624) {
      if (f['screen_sleep_ratio'] <= 0.381485) {
        if (f['work_study_hours'] <= 4.215000) {
          if (f['sleep_hours'] <= 8.905000) {
            if (f['gaming_share'] <= 0.898335) {
              if (f['notifications_per_day'] <= 226.500000) {
                return [0.0, 0.0, 1.0];
              } else {
                return [0.0, 0.2, 0.8];
              }
            } else {
              return [0.0, 0.4, 0.6];
            }
          } else {
            return [0.5, 0.16666666666666666, 0.3333333333333333];
          }
        } else {
          if (f['notif_x_switch'] <= 17.273174) {
            return [0.2, 0.0, 0.8];
          } else {
            return [1.0, 0.0, 0.0];
          }
        }
      } else {
        if (f['work_study_share'] <= 0.903956) {
          if (f['sleep_deficit'] <= 2.760000) {
            if (f['social_media_hours'] <= 4.005000) {
              if (f['entertainment_share'] <= 0.551650) {
                if (f['daily_screen_time_hours'] <= 3.665000) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.7251908396946565, 0.2748091603053435, 0.0];
                }
              } else {
                if (f['log_screen_time'] <= 1.505187) {
                  return [0.32098765432098764, 0.6790123456790124, 0.0];
                } else {
                  return [0.5179968701095462, 0.48200312989045385, 0.0];
                }
              }
            } else {
              return [0.0, 0.0, 1.0];
            }
          } else {
            if (f['sleep_deficit'] <= 2.945000) {
              if (f['social_media_share'] <= 0.879340) {
                if (f['gaming_hours'] <= 1.930000) {
                  return [0.047619047619047616, 0.9523809523809523, 0.0];
                } else {
                  return [0.32, 0.64, 0.04];
                }
              } else {
                if (f['notifications_per_day'] <= 94.500000) {
                  return [0.0, 0.0, 1.0];
                } else {
                  return [0.8, 0.0, 0.2];
                }
              }
            } else {
              if (f['app_switch_index'] <= 24.913574) {
                if (f['social_media_share'] <= 0.307949) {
                  return [0.75, 0.25, 0.0];
                } else {
                  return [0.0, 0.75, 0.25];
                }
              } else {
                return [1.0, 0.0, 0.0];
              }
            }
          }
        } else {
          if (f['work_study_hours'] <= 4.025000) {
            if (f['social_media_share'] <= 0.992978) {
              if (f['social_media_share'] <= 0.303230) {
                if (f['weekend_escalation'] <= 0.720075) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.125, 0.875, 0.0];
                }
              } else {
                if (f['gaming_share'] <= 0.997143) {
                  return [0.5454545454545454, 0.45454545454545453, 0.0];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              }
            } else {
              if (f['app_switch_index'] <= 24.307587) {
                if (f['gender_enc'] <= 1.500000) {
                  return [0.0, 0.7777777777777778, 0.2222222222222222];
                } else {
                  return [0.0, 0.25, 0.75];
                }
              } else {
                return [0.0, 0.0, 1.0];
              }
            }
          } else {
            if (f['social_media_hours'] <= 4.005000) {
              if (f['work_study_share'] <= 0.940049) {
                if (f['screen_sleep_ratio'] <= 0.992769) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.25, 0.75, 0.0];
                }
              } else {
                if (f['stress_x_screen'] <= 7.660000) {
                  return [0.5512820512820513, 0.44871794871794873, 0.0];
                } else {
                  return [0.35, 0.65, 0.0];
                }
              }
            } else {
              return [0.0, 0.0, 1.0];
            }
          }
        }
      }
    } else {
      if (f['social_media_hours'] <= 3.985000) {
        if (f['screen_sleep_ratio'] <= 1.033721) {
          if (f['social_media_share'] <= 0.488901) {
            if (f['log_screen_time'] <= 2.138888) {
              if (f['notification_load_index'] <= 26.843248) {
                if (f['sleep_deficit'] <= 1.260000) {
                  return [0.0, 0.29213483146067415, 0.7078651685393258];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              } else {
                if (f['social_media_hours'] <= 2.565000) {
                  return [0.0, 0.7441860465116279, 0.2558139534883721];
                } else {
                  return [0.0, 0.2727272727272727, 0.7272727272727273];
                }
              }
            } else {
              if (f['work_study_share'] <= 0.478318) {
                if (f['daily_screen_time_hours'] <= 7.670000) {
                  return [0.0, 0.75, 0.25];
                } else {
                  return [0.0, 0.25, 0.75];
                }
              } else {
                if (f['notif_x_switch'] <= 5.204816) {
                  return [0.0, 0.5862068965517241, 0.41379310344827586];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              }
            }
          } else {
            if (f['sleep_hours'] <= 7.940000) {
              if (f['notifications_per_day'] <= 181.500000) {
                if (f['notification_load_index'] <= 12.046205) {
                  return [0.0, 0.2857142857142857, 0.7142857142857143];
                } else {
                  return [0.0, 0.07142857142857142, 0.9285714285714286];
                }
              } else {
                if (f['log_screen_time'] <= 2.041992) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.0, 0.6666666666666666, 0.3333333333333333];
                }
              }
            } else {
              if (f['weekend_x_screen'] <= 1.140000) {
                return [0.0, 0.0, 1.0];
              } else {
                if (f['screen_sleep_ratio'] <= 0.740912) {
                  return [0.0, 0.4, 0.6];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              }
            }
          }
        } else {
          if (f['weekend_screen_time'] <= 8.145000) {
            if (f['weekend_escalation'] <= 0.206506) {
              if (f['daily_screen_time_hours'] <= 6.880000) {
                if (f['screen_sleep_ratio'] <= 1.110016) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.0, 0.4411764705882353, 0.5588235294117647];
                }
              } else {
                if (f['daily_screen_time_hours'] <= 7.010000) {
                  return [0.0, 0.2, 0.8];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              }
            } else {
              if (f['gaming_hours'] <= 2.135000) {
                return [0.0, 0.6666666666666666, 0.3333333333333333];
              } else {
                return [0.0, 1.0, 0.0];
              }
            }
          } else {
            if (f['daily_screen_time_hours'] <= 7.785000) {
              if (f['daily_screen_time_hours'] <= 7.545000) {
                if (f['sleep_hours'] <= 6.465000) {
                  return [0.0, 0.7302631578947368, 0.26973684210526316];
                } else {
                  return [0.0, 0.47058823529411764, 0.5294117647058824];
                }
              } else {
                if (f['work_study_share'] <= 0.156592) {
                  return [0.0, 0.8, 0.2];
                } else {
                  return [0.0, 0.34615384615384615, 0.6538461538461539];
                }
              }
            } else {
              if (f['sleep_deficit'] <= 2.475000) {
                if (f['app_switch_index'] <= 18.690570) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.0, 0.6, 0.4];
                }
              } else {
                return [0.0, 0.6666666666666666, 0.3333333333333333];
              }
            }
          }
        }
      } else {
        if (f['entertainment_share'] <= 0.704832) {
          if (f['sleep_deficit'] <= 1.725000) {
            return [0.0, 0.0, 1.0];
          } else {
            return [0.0, 0.3333333333333333, 0.6666666666666666];
          }
        } else {
          return [0.0, 0.0, 1.0];
        }
      }
    }
  } else {
    if (f['notif_x_switch'] <= 5.421883) {
      if (f['screen_sleep_ratio'] <= 0.929265) {
        if (f['log_screen_time'] <= 2.213204) {
          return [0.0, 0.3333333333333333, 0.6666666666666666];
        } else {
          return [0.0, 0.0, 1.0];
        }
      } else {
        if (f['log_screen_time'] <= 2.196669) {
          if (f['app_opens_per_day'] <= 134.500000) {
            if (f['work_study_hours'] <= 1.190000) {
              return [0.0, 0.3333333333333333, 0.6666666666666666];
            } else {
              return [0.0, 0.0, 1.0];
            }
          } else {
            if (f['gaming_share'] <= 0.318033) {
              return [0.0, 0.0, 1.0];
            } else {
              return [0.0, 1.0, 0.0];
            }
          }
        } else {
          return [0.0, 0.0, 1.0];
        }
      }
    } else {
      return [0.0, 0.25, 0.75];
    }
  }
}

function riskLevel3_tree_5(f) {
  if (f['daily_screen_time_hours'] <= 7.665000) {
    if (f['social_media_share'] <= 0.669833) {
      if (f['screen_sleep_ratio'] <= 0.789406) {
        if (f['daily_screen_time_hours'] <= 5.985000) {
          if (f['daily_screen_time_hours'] <= 5.635000) {
            if (f['sleep_hours'] <= 4.855000) {
              if (f['app_switch_index'] <= 30.593357) {
                return [0.16666666666666666, 0.8333333333333334, 0.0];
              } else {
                return [0.0, 1.0, 0.0];
              }
            } else {
              if (f['app_opens_per_day'] <= 23.500000) {
                if (f['age'] <= 30.500000) {
                  return [0.8928571428571429, 0.10714285714285714, 0.0];
                } else {
                  return [0.5555555555555556, 0.4444444444444444, 0.0];
                }
              } else {
                if (f['daily_screen_time_hours'] <= 5.505000) {
                  return [0.46833013435700577, 0.5316698656429942, 0.0];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              }
            }
          } else {
            if (f['productivity_share'] <= 0.660275) {
              if (f['screen_sleep_ratio'] <= 0.745686) {
                if (f['entertainment_share'] <= 0.930796) {
                  return [0.14285714285714285, 0.8571428571428571, 0.0];
                } else {
                  return [0.6666666666666666, 0.3333333333333333, 0.0];
                }
              } else {
                return [1.0, 0.0, 0.0];
              }
            } else {
              if (f['stress_level_enc'] <= 0.500000) {
                if (f['entertainment_share'] <= 0.750903) {
                  return [0.5, 0.5, 0.0];
                } else {
                  return [1.0, 0.0, 0.0];
                }
              } else {
                return [1.0, 0.0, 0.0];
              }
            }
          }
        } else {
          if (f['age'] <= 22.500000) {
            if (f['productivity_share'] <= 0.291634) {
              return [0.0, 0.3333333333333333, 0.6666666666666666];
            } else {
              if (f['sleep_hours'] <= 8.790000) {
                if (f['app_switch_index'] <= 8.556414) {
                  return [0.0, 0.6666666666666666, 0.3333333333333333];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              } else {
                return [0.0, 0.75, 0.25];
              }
            }
          } else {
            if (f['screen_sleep_ratio'] <= 0.770534) {
              if (f['screen_sleep_ratio'] <= 0.745341) {
                if (f['app_switch_index'] <= 9.617272) {
                  return [0.0, 0.75, 0.25];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              } else {
                return [0.0, 1.0, 0.0];
              }
            } else {
              if (f['academic_work_impact_enc'] <= 0.500000) {
                return [0.0, 0.0, 1.0];
              } else {
                return [0.0, 0.3333333333333333, 0.6666666666666666];
              }
            }
          }
        }
      } else {
        if (f['daily_screen_time_hours'] <= 6.015000) {
          if (f['app_opens_per_day'] <= 19.500000) {
            if (f['academic_work_impact_enc'] <= 0.500000) {
              return [0.8333333333333334, 0.16666666666666666, 0.0];
            } else {
              return [1.0, 0.0, 0.0];
            }
          } else {
            if (f['notif_x_switch'] <= 6.899642) {
              if (f['app_switch_index'] <= 14.617910) {
                if (f['stress_x_screen'] <= 11.190000) {
                  return [0.27380952380952384, 0.7261904761904762, 0.0];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              } else {
                if (f['screen_sleep_ratio'] <= 0.823216) {
                  return [0.0625, 0.9375, 0.0];
                } else {
                  return [0.6095238095238096, 0.3904761904761905, 0.0];
                }
              }
            } else {
              if (f['app_opens_per_day'] <= 129.000000) {
                if (f['sleep_hours'] <= 4.770000) {
                  return [0.6666666666666666, 0.3333333333333333, 0.0];
                } else {
                  return [1.0, 0.0, 0.0];
                }
              } else {
                if (f['entertainment_share'] <= 0.671095) {
                  return [0.7037037037037037, 0.2962962962962963, 0.0];
                } else {
                  return [0.3902439024390244, 0.6097560975609756, 0.0];
                }
              }
            }
          }
        } else {
          if (f['social_media_share'] <= 0.567433) {
            if (f['weekend_escalation'] <= 0.339222) {
              if (f['gaming_hours'] <= 0.175000) {
                if (f['work_study_share'] <= 0.478677) {
                  return [0.0, 0.0, 1.0];
                } else {
                  return [0.0, 0.2857142857142857, 0.7142857142857143];
                }
              } else {
                if (f['entertainment_share'] <= 0.325531) {
                  return [0.0, 0.8387096774193549, 0.16129032258064516];
                } else {
                  return [0.0, 0.5, 0.5];
                }
              }
            } else {
              if (f['notifications_per_day'] <= 136.000000) {
                if (f['gender_enc'] <= 1.500000) {
                  return [0.0, 0.391304347826087, 0.6086956521739131];
                } else {
                  return [0.0, 0.7096774193548387, 0.2903225806451613];
                }
              } else {
                if (f['social_media_hours'] <= 1.795000) {
                  return [0.0, 0.9722222222222222, 0.027777777777777776];
                } else {
                  return [0.0, 0.7272727272727273, 0.2727272727272727];
                }
              }
            }
          } else {
            if (f['social_media_hours'] <= 4.010000) {
              if (f['notifications_per_day'] <= 164.500000) {
                return [0.0, 1.0, 0.0];
              } else {
                if (f['sleep_deficit'] <= 1.880000) {
                  return [0.0, 0.0, 1.0];
                } else {
                  return [0.0, 0.75, 0.25];
                }
              }
            } else {
              return [0.0, 0.0, 1.0];
            }
          }
        }
      }
    } else {
      if (f['log_screen_time'] <= 1.866403) {
        if (f['notification_load_index'] <= 42.880310) {
          if (f['notification_load_index'] <= 5.664038) {
            if (f['work_study_hours'] <= 3.340000) {
              if (f['weekend_escalation'] <= 0.263226) {
                return [1.0, 0.0, 0.0];
              } else {
                return [0.6666666666666666, 0.0, 0.3333333333333333];
              }
            } else {
              return [0.16666666666666669, 0.6666666666666667, 0.16666666666666669];
            }
          } else {
            if (f['social_media_hours'] <= 4.005000) {
              if (f['weekend_screen_time'] <= 4.125000) {
                return [1.0, 0.0, 0.0];
              } else {
                if (f['weekend_x_screen'] <= 0.705000) {
                  return [0.9285714285714286, 0.07142857142857142, 0.0];
                } else {
                  return [0.4727272727272727, 0.5272727272727272, 0.0];
                }
              }
            } else {
              return [0.0, 0.0, 1.0];
            }
          }
        } else {
          if (f['social_media_share'] <= 0.992331) {
            if (f['log_screen_time'] <= 1.735183) {
              if (f['gaming_hours'] <= 3.510000) {
                if (f['work_study_hours'] <= 1.625000) {
                  return [0.3, 0.65, 0.05];
                } else {
                  return [0.7241379310344828, 0.27586206896551724, 0.0];
                }
              } else {
                if (f['sleep_deficit'] <= 0.775000) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.6666666666666666, 0.3333333333333333, 0.0];
                }
              }
            } else {
              if (f['social_media_share'] <= 0.766025) {
                if (f['gaming_share'] <= 0.398691) {
                  return [0.5, 0.5, 0.0];
                } else {
                  return [1.0, 0.0, 0.0];
                }
              } else {
                if (f['entertainment_share'] <= 0.945682) {
                  return [0.0, 0.6, 0.4];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              }
            }
          } else {
            if (f['gaming_share'] <= 0.948921) {
              if (f['gaming_share'] <= 0.039903) {
                if (f['gaming_hours'] <= 0.090000) {
                  return [0.0, 0.0, 1.0];
                } else {
                  return [0.7142857142857143, 0.0, 0.2857142857142857];
                }
              } else {
                if (f['social_media_hours'] <= 4.000000) {
                  return [0.4, 0.6, 0.0];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              }
            } else {
              if (f['notifications_per_day'] <= 171.500000) {
                if (f['app_opens_per_day'] <= 48.000000) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.5, 0.4, 0.1];
                }
              } else {
                if (f['sleep_hours'] <= 6.805000) {
                  return [0.375, 0.125, 0.5];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              }
            }
          }
        }
      } else {
        if (f['social_media_hours'] <= 4.040000) {
          if (f['social_media_share'] <= 0.682082) {
            return [0.25, 0.75, 0.0];
          } else {
            return [1.0, 0.0, 0.0];
          }
        } else {
          return [0.0, 0.0, 1.0];
        }
      }
    }
  } else {
    if (f['notification_load_index'] <= 29.478811) {
      if (f['daily_screen_time_hours'] <= 7.975000) {
        if (f['social_media_share'] <= 0.446921) {
          if (f['weekend_escalation'] <= 0.192181) {
            if (f['age'] <= 30.000000) {
              if (f['sleep_deficit'] <= 0.515000) {
                if (f['gaming_share'] <= 0.321144) {
                  return [0.0, 0.0, 1.0];
                } else {
                  return [0.0, 0.3333333333333333, 0.6666666666666666];
                }
              } else {
                if (f['productivity_share'] <= 0.369748) {
                  return [0.0, 0.7142857142857143, 0.2857142857142857];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              }
            } else {
              return [0.0, 1.0, 0.0];
            }
          } else {
            if (f['entertainment_share'] <= 0.404743) {
              if (f['weekend_screen_time'] <= 10.255000) {
                if (f['sleep_hours'] <= 7.420000) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              } else {
                return [0.0, 1.0, 0.0];
              }
            } else {
              if (f['age'] <= 25.500000) {
                return [0.0, 0.0, 1.0];
              } else {
                if (f['work_study_share'] <= 0.434004) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.0, 0.125, 0.875];
                }
              }
            }
          }
        } else {
          if (f['sleep_hours'] <= 8.495000) {
            return [0.0, 0.0, 1.0];
          } else {
            if (f['gaming_hours'] <= 1.340000) {
              return [0.0, 0.0, 1.0];
            } else {
              return [0.0, 0.5, 0.5];
            }
          }
        }
      } else {
        if (f['log_screen_time'] <= 2.197780) {
          if (f['gaming_hours'] <= 1.030000) {
            return [0.0, 0.3333333333333333, 0.6666666666666666];
          } else {
            return [0.0, 0.0, 1.0];
          }
        } else {
          return [0.0, 0.0, 1.0];
        }
      }
    } else {
      if (f['social_media_share'] <= 0.167890) {
        return [0.0, 0.8333333333333334, 0.16666666666666666];
      } else {
        if (f['stress_x_screen'] <= 15.550000) {
          return [0.0, 0.0, 1.0];
        } else {
          return [0.0, 0.2, 0.8];
        }
      }
    }
  }
}

function riskLevel3_tree_6(f) {
  if (f['notif_x_switch'] <= 3.687526) {
    if (f['screen_sleep_ratio'] <= 0.955115) {
      if (f['entertainment_share'] <= 0.984841) {
        if (f['daily_screen_time_hours'] <= 6.010000) {
          if (f['log_screen_time'] <= 1.940895) {
            if (f['notif_x_switch'] <= 0.363320) {
              if (f['weekend_screen_time'] <= 6.850000) {
                return [1.0, 0.0, 0.0];
              } else {
                return [0.6666666666666666, 0.0, 0.3333333333333333];
              }
            } else {
              if (f['weekend_screen_time'] <= 7.270000) {
                if (f['age'] <= 24.500000) {
                  return [0.2191780821917808, 0.7534246575342466, 0.0273972602739726];
                } else {
                  return [0.35772357723577236, 0.5934959349593496, 0.04878048780487805];
                }
              } else {
                if (f['work_study_share'] <= 0.813001) {
                  return [0.42105263157894735, 0.5263157894736842, 0.05263157894736842];
                } else {
                  return [0.72, 0.28, 0.0];
                }
              }
            }
          } else {
            return [1.0, 0.0, 0.0];
          }
        } else {
          if (f['social_media_hours'] <= 3.995000) {
            if (f['daily_screen_time_hours'] <= 6.610000) {
              if (f['log_screen_time'] <= 1.957980) {
                if (f['social_media_hours'] <= 2.800000) {
                  return [0.0, 0.5, 0.5];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              } else {
                if (f['gaming_share'] <= 0.337720) {
                  return [0.0, 0.4230769230769231, 0.5769230769230769];
                } else {
                  return [0.0, 0.8214285714285714, 0.17857142857142858];
                }
              }
            } else {
              if (f['social_media_hours'] <= 3.750000) {
                if (f['sleep_hours'] <= 7.595000) {
                  return [0.0, 0.05, 0.95];
                } else {
                  return [0.0, 0.34782608695652173, 0.6521739130434783];
                }
              } else {
                return [0.0, 1.0, 0.0];
              }
            }
          } else {
            return [0.0, 0.0, 1.0];
          }
        }
      } else {
        if (f['screen_sleep_ratio'] <= 0.528467) {
          if (f['social_media_hours'] <= 4.040000) {
            if (f['app_switch_index'] <= 12.845653) {
              if (f['log_screen_time'] <= 1.533636) {
                if (f['app_opens_per_day'] <= 25.000000) {
                  return [0.8888888888888888, 0.1111111111111111, 0.0];
                } else {
                  return [0.38461538461538464, 0.6153846153846154, 0.0];
                }
              } else {
                return [0.0, 1.0, 0.0];
              }
            } else {
              if (f['weekend_x_screen'] <= 1.145000) {
                return [1.0, 0.0, 0.0];
              } else {
                if (f['notif_x_switch'] <= 2.080843) {
                  return [1.0, 0.0, 0.0];
                } else {
                  return [0.6, 0.4, 0.0];
                }
              }
            }
          } else {
            return [0.0, 0.0, 1.0];
          }
        } else {
          if (f['social_media_hours'] <= 4.005000) {
            if (f['weekend_screen_time'] <= 7.215000) {
              if (f['social_media_hours'] <= 3.875000) {
                if (f['productivity_share'] <= 0.974359) {
                  return [0.6714285714285714, 0.32857142857142857, 0.0];
                } else {
                  return [1.0, 0.0, 0.0];
                }
              } else {
                return [0.0, 1.0, 0.0];
              }
            } else {
              if (f['academic_work_impact_enc'] <= 0.500000) {
                if (f['notif_x_switch'] <= 1.921947) {
                  return [0.1, 0.9, 0.0];
                } else {
                  return [0.75, 0.25, 0.0];
                }
              } else {
                if (f['weekend_x_screen'] <= 1.975000) {
                  return [0.0, 0.14285714285714285, 0.8571428571428571];
                } else {
                  return [0.6, 0.4, 0.0];
                }
              }
            }
          } else {
            return [0.0, 0.0, 1.0];
          }
        }
      }
    } else {
      if (f['sleep_hours'] <= 6.465000) {
        if (f['weekend_screen_time'] <= 10.115000) {
          if (f['daily_screen_time_hours'] <= 7.855000) {
            if (f['weekend_escalation'] <= 0.394198) {
              if (f['entertainment_share'] <= 0.594468) {
                if (f['work_study_share'] <= 0.312785) {
                  return [0.125, 0.375, 0.5];
                } else {
                  return [0.1506849315068493, 0.726027397260274, 0.1232876712328767];
                }
              } else {
                if (f['daily_screen_time_hours'] <= 5.955000) {
                  return [0.35185185185185186, 0.14814814814814814, 0.5];
                } else {
                  return [0.0, 0.24285714285714285, 0.7571428571428571];
                }
              }
            } else {
              if (f['daily_screen_time_hours'] <= 6.500000) {
                if (f['social_media_share'] <= 0.773253) {
                  return [0.3793103448275862, 0.4482758620689655, 0.1724137931034483];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              } else {
                if (f['sleep_hours'] <= 4.760000) {
                  return [0.0, 0.75, 0.25];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              }
            }
          } else {
            if (f['weekend_screen_time'] <= 8.885000) {
              if (f['gaming_share'] <= 0.368448) {
                return [0.0, 0.0, 1.0];
              } else {
                return [0.0, 0.75, 0.25];
              }
            } else {
              return [0.0, 0.0, 1.0];
            }
          }
        } else {
          if (f['notification_load_index'] <= 28.134680) {
            if (f['screen_sleep_ratio'] <= 1.264858) {
              return [0.0, 0.8, 0.2];
            } else {
              if (f['daily_screen_time_hours'] <= 7.505000) {
                return [0.0, 0.6666666666666666, 0.3333333333333333];
              } else {
                if (f['log_screen_time'] <= 2.194443) {
                  return [0.0, 0.12, 0.88];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              }
            }
          } else {
            return [0.0, 0.7142857142857143, 0.2857142857142857];
          }
        }
      } else {
        if (f['log_screen_time'] <= 2.194443) {
          if (f['stress_x_screen'] <= 15.780000) {
            if (f['social_media_hours'] <= 3.745000) {
              if (f['weekend_x_screen'] <= 2.455000) {
                if (f['daily_screen_time_hours'] <= 7.740000) {
                  return [0.0, 0.34210526315789475, 0.6578947368421053];
                } else {
                  return [0.0, 0.8461538461538461, 0.15384615384615385];
                }
              } else {
                if (f['app_opens_per_day'] <= 81.500000) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.0, 0.625, 0.375];
                }
              }
            } else {
              if (f['age'] <= 34.500000) {
                return [0.0, 0.0, 1.0];
              } else {
                return [0.0, 0.25, 0.75];
              }
            }
          } else {
            if (f['social_media_hours'] <= 1.285000) {
              return [0.0, 0.75, 0.25];
            } else {
              return [0.0, 1.0, 0.0];
            }
          }
        } else {
          if (f['weekend_screen_time'] <= 10.365000) {
            if (f['weekend_escalation'] <= 0.264544) {
              return [0.0, 0.0, 1.0];
            } else {
              return [0.0, 0.25, 0.75];
            }
          } else {
            return [0.0, 0.0, 1.0];
          }
        }
      }
    }
  } else {
    if (f['log_screen_time'] <= 1.944480) {
      if (f['entertainment_share'] <= 0.988560) {
        if (f['social_media_share'] <= 0.463098) {
          if (f['weekend_escalation'] <= 0.445696) {
            if (f['work_study_hours'] <= 0.700000) {
              return [1.0, 0.0, 0.0];
            } else {
              if (f['weekend_screen_time'] <= 7.020000) {
                if (f['weekend_x_screen'] <= 1.645000) {
                  return [0.49, 0.51, 0.0];
                } else {
                  return [1.0, 0.0, 0.0];
                }
              } else {
                if (f['productivity_share'] <= 0.733190) {
                  return [0.5263157894736842, 0.47368421052631576, 0.0];
                } else {
                  return [0.07692307692307693, 0.9230769230769231, 0.0];
                }
              }
            }
          } else {
            if (f['gaming_hours'] <= 0.175000) {
              if (f['sleep_hours'] <= 7.015000) {
                return [1.0, 0.0, 0.0];
              } else {
                return [0.0, 1.0, 0.0];
              }
            } else {
              if (f['notification_load_index'] <= 59.505873) {
                if (f['productivity_share'] <= 0.948814) {
                  return [0.90625, 0.09375, 0.0];
                } else {
                  return [0.64, 0.36, 0.0];
                }
              } else {
                return [0.0, 1.0, 0.0];
              }
            }
          }
        } else {
          if (f['social_media_hours'] <= 4.010000) {
            if (f['gaming_hours'] <= 0.125000) {
              return [0.8333333333333334, 0.16666666666666666, 0.0];
            } else {
              if (f['weekend_screen_time'] <= 5.965000) {
                if (f['gaming_share'] <= 0.381405) {
                  return [0.3958333333333333, 0.6041666666666666, 0.0];
                } else {
                  return [1.0, 0.0, 0.0];
                }
              } else {
                if (f['weekend_escalation'] <= 0.358973) {
                  return [0.3611111111111111, 0.6388888888888888, 0.0];
                } else {
                  return [0.12, 0.88, 0.0];
                }
              }
            }
          } else {
            return [0.0, 0.0, 1.0];
          }
        }
      } else {
        if (f['sleep_deficit'] <= 2.300000) {
          if (f['social_media_hours'] <= 4.005000) {
            if (f['stress_level_enc'] <= 1.500000) {
              if (f['screen_sleep_ratio'] <= 0.509189) {
                if (f['stress_x_screen'] <= 6.080000) {
                  return [0.42424242424242425, 0.5757575757575758, 0.0];
                } else {
                  return [0.10714285714285714, 0.8928571428571429, 0.0];
                }
              } else {
                if (f['app_opens_per_day'] <= 151.500000) {
                  return [0.6886792452830188, 0.3113207547169811, 0.0];
                } else {
                  return [0.2, 0.8, 0.0];
                }
              }
            } else {
              if (f['notification_load_index'] <= 14.726785) {
                return [0.0, 1.0, 0.0];
              } else {
                if (f['productivity_share'] <= 0.176091) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.6788990825688074, 0.3211009174311927, 0.0];
                }
              }
            }
          } else {
            return [0.0, 0.0, 1.0];
          }
        } else {
          if (f['social_media_share'] <= 0.831722) {
            if (f['productivity_share'] <= 0.575034) {
              if (f['notif_x_switch'] <= 6.495208) {
                return [1.0, 0.0, 0.0];
              } else {
                if (f['weekend_screen_time'] <= 5.970000) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.5714285714285714, 0.0, 0.42857142857142855];
                }
              }
            } else {
              if (f['app_opens_per_day'] <= 153.500000) {
                if (f['social_media_hours'] <= 2.735000) {
                  return [0.3181818181818182, 0.6818181818181818, 0.0];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              } else {
                return [0.8333333333333334, 0.16666666666666666, 0.0];
              }
            }
          } else {
            if (f['social_media_hours'] <= 4.025000) {
              if (f['gaming_share'] <= 0.376156) {
                return [0.5, 0.5, 0.0];
              } else {
                return [0.09090909090909091, 0.9090909090909091, 0.0];
              }
            } else {
              return [0.0, 0.0, 1.0];
            }
          }
        }
      }
    } else {
      if (f['stress_x_screen'] <= 7.895000) {
        if (f['stress_x_screen'] <= 7.570000) {
          if (f['social_media_share'] <= 0.622131) {
            if (f['social_media_hours'] <= 3.985000) {
              if (f['daily_screen_time_hours'] <= 7.805000) {
                if (f['age'] <= 21.500000) {
                  return [0.0, 0.7692307692307693, 0.23076923076923078];
                } else {
                  return [0.0, 0.4563106796116505, 0.5436893203883495];
                }
              } else {
                return [0.0, 0.0, 1.0];
              }
            } else {
              return [0.0, 0.0, 1.0];
            }
          } else {
            return [0.0, 0.0, 1.0];
          }
        } else {
          if (f['productivity_share'] <= 0.421690) {
            return [0.0, 0.25, 0.75];
          } else {
            if (f['log_screen_time'] <= 2.170765) {
              return [0.0, 1.0, 0.0];
            } else {
              return [0.0, 0.6666666666666666, 0.3333333333333333];
            }
          }
        }
      } else {
        if (f['log_screen_time'] <= 2.148851) {
          if (f['app_opens_per_day'] <= 111.500000) {
            if (f['stress_x_screen'] <= 13.550000) {
              if (f['app_opens_per_day'] <= 104.000000) {
                return [0.0, 0.6, 0.4];
              } else {
                return [0.0, 1.0, 0.0];
              }
            } else {
              if (f['app_switch_index'] <= 13.221828) {
                return [0.0, 0.6, 0.4];
              } else {
                return [0.0, 0.0, 1.0];
              }
            }
          } else {
            if (f['entertainment_share'] <= 0.458934) {
              if (f['gaming_hours'] <= 1.030000) {
                return [0.0, 0.4, 0.6];
              } else {
                return [0.0, 1.0, 0.0];
              }
            } else {
              if (f['entertainment_share'] <= 0.793672) {
                if (f['weekend_escalation'] <= 0.287052) {
                  return [0.0, 0.0, 1.0];
                } else {
                  return [0.14285714285714288, 0.5714285714285715, 0.28571428571428575];
                }
              } else {
                if (f['log_screen_time'] <= 1.992639) {
                  return [0.0, 0.3333333333333333, 0.6666666666666666];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              }
            }
          }
        } else {
          if (f['daily_screen_time_hours'] <= 7.960000) {
            if (f['entertainment_share'] <= 0.415121) {
              return [0.0, 0.6666666666666666, 0.3333333333333333];
            } else {
              return [0.0, 0.0, 1.0];
            }
          } else {
            return [0.0, 0.0, 1.0];
          }
        }
      }
    }
  }
}

function riskLevel3_tree_7(f) {
  if (f['entertainment_share'] <= 0.601406) {
    if (f['weekend_screen_time'] <= 8.905000) {
      if (f['weekend_escalation'] <= 0.279708) {
        if (f['log_screen_time'] <= 1.965012) {
          if (f['weekend_screen_time'] <= 5.565000) {
            if (f['stress_x_screen'] <= 8.140000) {
              return [0.0, 1.0, 0.0];
            } else {
              if (f['weekend_escalation'] <= 0.161349) {
                return [0.14285714285714285, 0.8571428571428571, 0.0];
              } else {
                return [0.4, 0.6, 0.0];
              }
            }
          } else {
            if (f['social_media_share'] <= 0.349688) {
              if (f['low_sleep'] <= 0.500000) {
                if (f['sleep_hours'] <= 8.685000) {
                  return [0.6071428571428571, 0.39285714285714285, 0.0];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              } else {
                if (f['weekend_x_screen'] <= 1.040000) {
                  return [0.5, 0.5, 0.0];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              }
            } else {
              if (f['sleep_deficit'] <= 1.555000) {
                if (f['screen_sleep_ratio'] <= 0.790246) {
                  return [1.0, 0.0, 0.0];
                } else {
                  return [0.5, 0.5, 0.0];
                }
              } else {
                return [0.3333333333333333, 0.6666666666666666, 0.0];
              }
            }
          }
        } else {
          if (f['weekend_escalation'] <= 0.082508) {
            return [0.0, 0.0, 1.0];
          } else {
            if (f['age'] <= 22.500000) {
              if (f['work_study_hours'] <= 5.205000) {
                if (f['social_media_hours'] <= 2.525000) {
                  return [0.0, 0.9230769230769231, 0.07692307692307693];
                } else {
                  return [0.0, 0.45454545454545453, 0.5454545454545454];
                }
              } else {
                return [0.0, 0.3333333333333333, 0.6666666666666666];
              }
            } else {
              if (f['screen_sleep_ratio'] <= 1.324011) {
                if (f['social_media_hours'] <= 0.715000) {
                  return [0.0, 0.8, 0.2];
                } else {
                  return [0.0, 0.3142857142857143, 0.6857142857142857];
                }
              } else {
                if (f['app_opens_per_day'] <= 92.500000) {
                  return [0.0, 0.0, 1.0];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              }
            }
          }
        }
      } else {
        if (f['log_screen_time'] <= 1.943765) {
          if (f['weekend_x_screen'] <= 2.765000) {
            if (f['work_study_hours'] <= 5.045000) {
              if (f['app_switch_index'] <= 19.008394) {
                if (f['notifications_per_day'] <= 165.000000) {
                  return [0.75, 0.25, 0.0];
                } else {
                  return [0.42857142857142855, 0.5714285714285714, 0.0];
                }
              } else {
                if (f['app_switch_index'] <= 31.398434) {
                  return [0.8888888888888888, 0.1111111111111111, 0.0];
                } else {
                  return [0.6153846153846154, 0.38461538461538464, 0.0];
                }
              }
            } else {
              if (f['notif_x_switch'] <= 2.141676) {
                return [0.0, 1.0, 0.0];
              } else {
                if (f['weekend_screen_time'] <= 6.585000) {
                  return [0.375, 0.625, 0.0];
                } else {
                  return [0.8, 0.2, 0.0];
                }
              }
            }
          } else {
            if (f['social_media_hours'] <= 1.375000) {
              if (f['gaming_hours'] <= 0.835000) {
                return [0.0, 1.0, 0.0];
              } else {
                return [1.0, 0.0, 0.0];
              }
            } else {
              return [0.0, 1.0, 0.0];
            }
          }
        } else {
          if (f['age'] <= 22.500000) {
            return [0.0, 0.2857142857142857, 0.7142857142857143];
          } else {
            if (f['entertainment_share'] <= 0.451564) {
              return [0.0, 0.6666666666666666, 0.3333333333333333];
            } else {
              return [0.0, 1.0, 0.0];
            }
          }
        }
      }
    } else {
      if (f['work_study_share'] <= 0.673980) {
        if (f['weekend_escalation'] <= 0.360470) {
          if (f['screen_sleep_ratio'] <= 0.906255) {
            if (f['weekend_escalation'] <= 0.304322) {
              return [0.0, 1.0, 0.0];
            } else {
              if (f['gaming_hours'] <= 1.690000) {
                if (f['entertainment_share'] <= 0.391386) {
                  return [0.0, 0.8, 0.2];
                } else {
                  return [0.0, 0.4, 0.6];
                }
              } else {
                return [0.0, 0.0, 1.0];
              }
            }
          } else {
            if (f['weekend_screen_time'] <= 10.465000) {
              if (f['weekend_x_screen'] <= 1.845000) {
                if (f['weekend_screen_time'] <= 9.380000) {
                  return [0.0, 0.15384615384615385, 0.8461538461538461];
                } else {
                  return [0.0, 0.005952380952380952, 0.9940476190476191];
                }
              } else {
                if (f['daily_screen_time_hours'] <= 7.965000) {
                  return [0.0, 0.5208333333333334, 0.4791666666666667];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              }
            } else {
              return [0.0, 0.0, 1.0];
            }
          }
        } else {
          if (f['social_media_hours'] <= 1.260000) {
            return [0.0, 1.0, 0.0];
          } else {
            if (f['notif_x_switch'] <= 1.813342) {
              if (f['work_study_hours'] <= 3.265000) {
                return [0.0, 0.7142857142857143, 0.2857142857142857];
              } else {
                if (f['entertainment_share'] <= 0.488587) {
                  return [0.0, 0.3333333333333333, 0.6666666666666666];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              }
            } else {
              if (f['notifications_per_day'] <= 216.000000) {
                return [0.0, 1.0, 0.0];
              } else {
                return [0.0, 0.5, 0.5];
              }
            }
          }
        }
      } else {
        if (f['gaming_share'] <= 0.313817) {
          if (f['low_sleep'] <= 0.500000) {
            if (f['gaming_hours'] <= 1.595000) {
              if (f['age'] <= 30.500000) {
                if (f['weekend_x_screen'] <= 1.805000) {
                  return [0.0, 0.3333333333333333, 0.6666666666666666];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              } else {
                return [0.0, 0.6, 0.4];
              }
            } else {
              return [0.0, 1.0, 0.0];
            }
          } else {
            if (f['notif_x_switch'] <= 0.916908) {
              return [0.0, 0.75, 0.25];
            } else {
              return [0.0, 1.0, 0.0];
            }
          }
        } else {
          if (f['social_media_share'] <= 0.099372) {
            return [0.0, 0.0, 1.0];
          } else {
            return [0.0, 0.3333333333333333, 0.6666666666666666];
          }
        }
      }
    }
  } else {
    if (f['screen_sleep_ratio'] <= 0.916941) {
      if (f['social_media_share'] <= 0.864910) {
        if (f['weekend_escalation'] <= 0.456860) {
          if (f['daily_screen_time_hours'] <= 5.855000) {
            if (f['social_media_hours'] <= 4.000000) {
              if (f['notif_x_switch'] <= 0.363320) {
                return [1.0, 0.0, 0.0];
              } else {
                if (f['daily_screen_time_hours'] <= 3.725000) {
                  return [0.6875, 0.3125, 0.0];
                } else {
                  return [0.48138297872340424, 0.5186170212765957, 0.0];
                }
              }
            } else {
              return [0.0, 0.0, 1.0];
            }
          } else {
            if (f['notif_x_switch'] <= 5.682201) {
              if (f['entertainment_share'] <= 0.937773) {
                if (f['stress_x_screen'] <= 7.505000) {
                  return [0.01834862385321101, 0.48623853211009177, 0.4954128440366973];
                } else {
                  return [0.02, 0.24, 0.74];
                }
              } else {
                if (f['log_screen_time'] <= 1.961493) {
                  return [0.0, 0.375, 0.625];
                } else {
                  return [0.0, 0.05263157894736842, 0.9473684210526315];
                }
              }
            } else {
              if (f['weekend_x_screen'] <= 0.805000) {
                return [0.0, 0.3333333333333333, 0.6666666666666666];
              } else {
                if (f['gaming_share'] <= 0.235917) {
                  return [0.0, 0.1111111111111111, 0.8888888888888888];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              }
            }
          }
        } else {
          if (f['social_media_hours'] <= 4.025000) {
            if (f['entertainment_share'] <= 0.783669) {
              if (f['age'] <= 23.000000) {
                if (f['work_study_hours'] <= 4.765000) {
                  return [0.9230769230769231, 0.07692307692307693, 0.0];
                } else {
                  return [0.5, 0.5, 0.0];
                }
              } else {
                if (f['work_study_hours'] <= 3.415000) {
                  return [0.9047619047619048, 0.09523809523809523, 0.0];
                } else {
                  return [0.2, 0.8, 0.0];
                }
              }
            } else {
              if (f['log_screen_time'] <= 1.414638) {
                if (f['gaming_share'] <= 0.991857) {
                  return [0.9166666666666666, 0.08333333333333333, 0.0];
                } else {
                  return [0.5, 0.5, 0.0];
                }
              } else {
                if (f['app_opens_per_day'] <= 35.000000) {
                  return [0.631578947368421, 0.3684210526315789, 0.0];
                } else {
                  return [0.3761467889908257, 0.6238532110091743, 0.0];
                }
              }
            }
          } else {
            return [0.0, 0.0, 1.0];
          }
        }
      } else {
        if (f['social_media_hours'] <= 4.005000) {
          if (f['weekend_escalation'] <= 0.719441) {
            if (f['weekend_screen_time'] <= 5.085000) {
              if (f['weekend_x_screen'] <= 1.180000) {
                if (f['sleep_hours'] <= 7.660000) {
                  return [0.43478260869565216, 0.5652173913043478, 0.0];
                } else {
                  return [1.0, 0.0, 0.0];
                }
              } else {
                if (f['app_opens_per_day'] <= 107.000000) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.5714285714285714, 0.42857142857142855, 0.0];
                }
              }
            } else {
              if (f['weekend_x_screen'] <= 2.305000) {
                if (f['work_study_hours'] <= 1.075000) {
                  return [0.5454545454545454, 0.45454545454545453, 0.0];
                } else {
                  return [0.9333333333333333, 0.06666666666666667, 0.0];
                }
              } else {
                if (f['gaming_hours'] <= 2.335000) {
                  return [0.5, 0.5, 0.0];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              }
            }
          } else {
            if (f['weekend_escalation'] <= 0.816196) {
              if (f['gaming_share'] <= 0.419768) {
                return [0.25, 0.75, 0.0];
              } else {
                return [0.0, 1.0, 0.0];
              }
            } else {
              if (f['work_study_hours'] <= 2.850000) {
                return [0.4, 0.6, 0.0];
              } else {
                return [0.75, 0.25, 0.0];
              }
            }
          }
        } else {
          return [0.0, 0.0, 1.0];
        }
      }
    } else {
      if (f['social_media_share'] <= 0.230662) {
        if (f['work_study_hours'] <= 5.325000) {
          if (f['log_screen_time'] <= 2.180417) {
            if (f['app_opens_per_day'] <= 162.000000) {
              if (f['weekend_x_screen'] <= 2.055000) {
                if (f['weekend_x_screen'] <= 1.070000) {
                  return [0.0, 0.6666666666666666, 0.3333333333333333];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              } else {
                if (f['gaming_hours'] <= 3.545000) {
                  return [0.1111111111111111, 0.8888888888888888, 0.0];
                } else {
                  return [0.0, 0.5, 0.5];
                }
              }
            } else {
              return [0.4, 0.4, 0.2];
            }
          } else {
            return [0.0, 0.25, 0.75];
          }
        } else {
          if (f['age'] <= 27.000000) {
            return [0.0, 0.4, 0.6];
          } else {
            return [0.0, 0.0, 1.0];
          }
        }
      } else {
        if (f['social_media_hours'] <= 4.005000) {
          if (f['daily_screen_time_hours'] <= 8.000000) {
            if (f['low_sleep'] <= 0.500000) {
              if (f['notification_load_index'] <= 17.253201) {
                if (f['daily_screen_time_hours'] <= 7.345000) {
                  return [0.0, 0.575, 0.425];
                } else {
                  return [0.0, 0.8695652173913043, 0.13043478260869565];
                }
              } else {
                if (f['gaming_hours'] <= 2.345000) {
                  return [0.0625, 0.1875, 0.75];
                } else {
                  return [0.0, 0.5227272727272727, 0.4772727272727273];
                }
              }
            } else {
              if (f['log_screen_time'] <= 1.947329) {
                if (f['app_switch_index'] <= 14.452645) {
                  return [0.2391304347826087, 0.7608695652173914, 0.0];
                } else {
                  return [0.6101694915254238, 0.3898305084745763, 0.0];
                }
              } else {
                if (f['work_study_share'] <= 0.433915) {
                  return [0.0, 0.32786885245901637, 0.6721311475409836];
                } else {
                  return [0.0, 0.7213114754098361, 0.2786885245901639];
                }
              }
            }
          } else {
            return [0.0, 0.0, 1.0];
          }
        } else {
          return [0.0, 0.0, 1.0];
        }
      }
    }
  }
}

function riskLevel3_tree_8(f) {
  if (f['log_screen_time'] <= 2.184364) {
    if (f['social_media_hours'] <= 4.005000) {
      if (f['screen_sleep_ratio'] <= 0.880686) {
        if (f['productivity_share'] <= 0.998954) {
          if (f['log_screen_time'] <= 1.946624) {
            if (f['app_switch_index'] <= 31.923642) {
              if (f['notification_load_index'] <= 31.199979) {
                if (f['daily_screen_time_hours'] <= 5.470000) {
                  return [0.5106382978723404, 0.48936170212765956, 0.0];
                } else {
                  return [0.2826086956521739, 0.717391304347826, 0.0];
                }
              } else {
                if (f['stress_level_enc'] <= 0.500000) {
                  return [0.7142857142857143, 0.2857142857142857, 0.0];
                } else {
                  return [0.4857142857142857, 0.5142857142857142, 0.0];
                }
              }
            } else {
              if (f['notification_load_index'] <= 69.096542) {
                if (f['screen_sleep_ratio'] <= 0.715186) {
                  return [0.2642857142857143, 0.7357142857142858, 0.0];
                } else {
                  return [0.6071428571428571, 0.39285714285714285, 0.0];
                }
              } else {
                if (f['gaming_share'] <= 0.591846) {
                  return [0.75, 0.25, 0.0];
                } else {
                  return [1.0, 0.0, 0.0];
                }
              }
            }
          } else {
            if (f['sleep_hours'] <= 7.380000) {
              return [0.0, 1.0, 0.0];
            } else {
              if (f['screen_sleep_ratio'] <= 0.706750) {
                return [0.0, 0.1111111111111111, 0.8888888888888888];
              } else {
                if (f['productivity_share'] <= 0.571903) {
                  return [0.0, 0.43283582089552236, 0.5671641791044776];
                } else {
                  return [0.0, 0.6724137931034483, 0.3275862068965517];
                }
              }
            }
          }
        } else {
          if (f['entertainment_share'] <= 0.927486) {
            if (f['notif_x_switch'] <= 18.842745) {
              if (f['entertainment_share'] <= 0.429917) {
                if (f['social_media_share'] <= 0.212214) {
                  return [0.5, 0.5, 0.0];
                } else {
                  return [1.0, 0.0, 0.0];
                }
              } else {
                if (f['log_screen_time'] <= 1.710181) {
                  return [0.2, 0.8, 0.0];
                } else {
                  return [0.5121951219512195, 0.4878048780487805, 0.0];
                }
              }
            } else {
              if (f['weekend_x_screen'] <= 1.905000) {
                return [1.0, 0.0, 0.0];
              } else {
                return [0.5, 0.5, 0.0];
              }
            }
          } else {
            if (f['app_switch_index'] <= 35.805422) {
              if (f['screen_sleep_ratio'] <= 0.679105) {
                if (f['notifications_per_day'] <= 110.000000) {
                  return [0.90625, 0.09375, 0.0];
                } else {
                  return [0.5280898876404494, 0.47191011235955055, 0.0];
                }
              } else {
                if (f['gender_enc'] <= 1.500000) {
                  return [0.7391304347826086, 0.2608695652173913, 0.0];
                } else {
                  return [1.0, 0.0, 0.0];
                }
              }
            } else {
              if (f['notif_x_switch'] <= 23.512764) {
                if (f['gaming_share'] <= 0.427121) {
                  return [0.8, 0.2, 0.0];
                } else {
                  return [0.11764705882352941, 0.8823529411764706, 0.0];
                }
              } else {
                return [1.0, 0.0, 0.0];
              }
            }
          }
        }
      } else {
        if (f['low_sleep'] <= 0.500000) {
          if (f['log_screen_time'] <= 1.942312) {
            if (f['weekend_x_screen'] <= 2.275000) {
              if (f['log_screen_time'] <= 1.913237) {
                return [0.0, 1.0, 0.0];
              } else {
                return [0.5, 0.5, 0.0];
              }
            } else {
              return [1.0, 0.0, 0.0];
            }
          } else {
            if (f['weekend_x_screen'] <= 2.675000) {
              if (f['notification_load_index'] <= 31.208515) {
                if (f['notification_load_index'] <= 15.311681) {
                  return [0.0, 0.5446428571428571, 0.45535714285714285];
                } else {
                  return [0.0, 0.3509933774834437, 0.6490066225165563];
                }
              } else {
                if (f['entertainment_share'] <= 0.610061) {
                  return [0.0, 0.5384615384615384, 0.46153846153846156];
                } else {
                  return [0.0, 0.9, 0.1];
                }
              }
            } else {
              if (f['log_screen_time'] <= 2.060980) {
                return [0.0, 1.0, 0.0];
              } else {
                if (f['social_media_hours'] <= 3.430000) {
                  return [0.0, 0.8181818181818182, 0.18181818181818182];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              }
            }
          }
        } else {
          if (f['log_screen_time'] <= 1.946612) {
            if (f['sleep_hours'] <= 5.075000) {
              if (f['gaming_share'] <= 0.078627) {
                return [1.0, 0.0, 0.0];
              } else {
                if (f['work_study_share'] <= 0.906522) {
                  return [0.43548387096774194, 0.5645161290322581, 0.0];
                } else {
                  return [0.03333333333333333, 0.9666666666666667, 0.0];
                }
              }
            } else {
              if (f['log_screen_time'] <= 1.871797) {
                if (f['work_study_hours'] <= 4.420000) {
                  return [0.6428571428571429, 0.35714285714285715, 0.0];
                } else {
                  return [0.2857142857142857, 0.7142857142857143, 0.0];
                }
              } else {
                if (f['screen_sleep_ratio'] <= 1.109964) {
                  return [0.9032258064516129, 0.0967741935483871, 0.0];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              }
            }
          } else {
            if (f['daily_screen_time_hours'] <= 7.005000) {
              if (f['gaming_share'] <= 0.107237) {
                return [0.0, 1.0, 0.0];
              } else {
                if (f['productivity_share'] <= 0.859493) {
                  return [0.0, 0.7078651685393258, 0.29213483146067415];
                } else {
                  return [0.0, 0.3333333333333333, 0.6666666666666666];
                }
              }
            } else {
              if (f['social_media_hours'] <= 1.030000) {
                if (f['stress_level_enc'] <= 1.500000) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.0, 0.4, 0.6];
                }
              } else {
                if (f['app_switch_index'] <= 21.084779) {
                  return [0.0, 0.4631578947368421, 0.5368421052631579];
                } else {
                  return [0.0, 0.09523809523809523, 0.9047619047619048];
                }
              }
            }
          }
        }
      }
    } else {
      return [0.0, 0.0, 1.0];
    }
  } else {
    if (f['log_screen_time'] <= 2.194443) {
      if (f['weekend_escalation'] <= 0.352791) {
        if (f['notification_load_index'] <= 4.105268) {
          return [0.0, 1.0, 0.0];
        } else {
          if (f['notif_x_switch'] <= 0.797407) {
            return [0.0, 0.5, 0.5];
          } else {
            if (f['entertainment_share'] <= 0.360480) {
              return [0.0, 0.4444444444444444, 0.5555555555555556];
            } else {
              if (f['gaming_share'] <= 0.291719) {
                return [0.0, 0.0, 1.0];
              } else {
                if (f['social_media_share'] <= 0.372257) {
                  return [0.0, 0.3333333333333333, 0.6666666666666666];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              }
            }
          }
        }
      } else {
        return [0.0, 1.0, 0.0];
      }
    } else {
      if (f['gaming_hours'] <= 0.685000) {
        if (f['log_screen_time'] <= 2.199444) {
          return [0.0, 0.25, 0.75];
        } else {
          return [0.0, 0.0, 1.0];
        }
      } else {
        return [0.0, 0.0, 1.0];
      }
    }
  }
}

function riskLevel3_tree_9(f) {
  if (f['log_screen_time'] <= 2.194443) {
    if (f['stress_x_screen'] <= 12.070000) {
      if (f['notification_load_index'] <= 35.040157) {
        if (f['entertainment_share'] <= 0.885880) {
          if (f['weekend_escalation'] <= 0.445482) {
            if (f['social_media_share'] <= 0.582950) {
              if (f['daily_screen_time_hours'] <= 6.005000) {
                if (f['daily_screen_time_hours'] <= 5.615000) {
                  return [0.30337078651685395, 0.6966292134831461, 0.0];
                } else {
                  return [0.5842696629213483, 0.4157303370786517, 0.0];
                }
              } else {
                if (f['social_media_hours'] <= 4.010000) {
                  return [0.0, 0.5592841163310962, 0.4407158836689038];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              }
            } else {
              if (f['log_screen_time'] <= 1.931517) {
                if (f['age'] <= 32.000000) {
                  return [0.5, 0.2727272727272727, 0.22727272727272727];
                } else {
                  return [0.14285714285714285, 0.8571428571428571, 0.0];
                }
              } else {
                if (f['social_media_hours'] <= 4.010000) {
                  return [0.0, 0.5, 0.5];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              }
            }
          } else {
            if (f['gaming_share'] <= 0.303403) {
              if (f['social_media_hours'] <= 1.440000) {
                if (f['daily_screen_time_hours'] <= 5.540000) {
                  return [0.8571428571428571, 0.14285714285714285, 0.0];
                } else {
                  return [0.0, 0.5, 0.5];
                }
              } else {
                if (f['academic_work_impact_enc'] <= 0.500000) {
                  return [0.20588235294117646, 0.7352941176470589, 0.058823529411764705];
                } else {
                  return [0.75, 0.25, 0.0];
                }
              }
            } else {
              if (f['sleep_deficit'] <= 2.000000) {
                if (f['log_screen_time'] <= 1.527137) {
                  return [0.08333333333333333, 0.9166666666666666, 0.0];
                } else {
                  return [0.5625, 0.375, 0.0625];
                }
              } else {
                return [0.0, 1.0, 0.0];
              }
            }
          }
        } else {
          if (f['social_media_hours'] <= 4.005000) {
            if (f['daily_screen_time_hours'] <= 5.880000) {
              if (f['social_media_hours'] <= 3.825000) {
                if (f['weekend_escalation'] <= 0.263803) {
                  return [0.6875, 0.3125, 0.0];
                } else {
                  return [0.46311475409836067, 0.5368852459016393, 0.0];
                }
              } else {
                if (f['gender_enc'] <= 0.500000) {
                  return [0.4, 0.6, 0.0];
                } else {
                  return [0.8709677419354839, 0.12903225806451613, 0.0];
                }
              }
            } else {
              if (f['productivity_share'] <= 0.437386) {
                if (f['productivity_share'] <= 0.206586) {
                  return [0.0, 0.6666666666666666, 0.3333333333333333];
                } else {
                  return [0.0, 0.125, 0.875];
                }
              } else {
                if (f['screen_sleep_ratio'] <= 0.789356) {
                  return [0.0, 0.125, 0.875];
                } else {
                  return [0.023809523809523808, 0.9047619047619048, 0.07142857142857142];
                }
              }
            }
          } else {
            return [0.0, 0.0, 1.0];
          }
        }
      } else {
        if (f['social_media_hours'] <= 4.005000) {
          if (f['daily_screen_time_hours'] <= 6.015000) {
            if (f['gaming_hours'] <= 0.375000) {
              if (f['sleep_hours'] <= 7.435000) {
                if (f['entertainment_share'] <= 0.994203) {
                  return [1.0, 0.0, 0.0];
                } else {
                  return [0.8, 0.2, 0.0];
                }
              } else {
                if (f['sleep_hours'] <= 8.375000) {
                  return [0.2, 0.8, 0.0];
                } else {
                  return [1.0, 0.0, 0.0];
                }
              }
            } else {
              if (f['work_study_hours'] <= 4.100000) {
                if (f['app_opens_per_day'] <= 16.500000) {
                  return [1.0, 0.0, 0.0];
                } else {
                  return [0.43217665615141954, 0.5678233438485805, 0.0];
                }
              } else {
                if (f['social_media_hours'] <= 2.365000) {
                  return [0.7790697674418605, 0.22093023255813954, 0.0];
                } else {
                  return [0.4153846153846154, 0.5846153846153846, 0.0];
                }
              }
            }
          } else {
            if (f['stress_x_screen'] <= 3.110000) {
              return [0.0, 1.0, 0.0];
            } else {
              if (f['sleep_deficit'] <= 0.995000) {
                return [0.0, 0.8, 0.2];
              } else {
                return [0.0, 0.0, 1.0];
              }
            }
          }
        } else {
          return [0.0, 0.0, 1.0];
        }
      }
    } else {
      if (f['daily_screen_time_hours'] <= 7.745000) {
        if (f['entertainment_share'] <= 0.732221) {
          if (f['app_switch_index'] <= 21.732271) {
            if (f['sleep_hours'] <= 7.085000) {
              if (f['log_screen_time'] <= 2.068760) {
                if (f['log_screen_time'] <= 1.998765) {
                  return [0.0, 0.5454545454545454, 0.45454545454545453];
                } else {
                  return [0.0, 0.9615384615384616, 0.038461538461538464];
                }
              } else {
                if (f['app_opens_per_day'] <= 124.000000) {
                  return [0.0, 0.2682926829268293, 0.7317073170731707];
                } else {
                  return [0.0, 0.8571428571428571, 0.14285714285714285];
                }
              }
            } else {
              if (f['social_media_hours'] <= 2.390000) {
                if (f['app_opens_per_day'] <= 96.000000) {
                  return [0.0, 0.5263157894736842, 0.47368421052631576];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              } else {
                if (f['work_study_share'] <= 0.200146) {
                  return [0.0, 0.25, 0.75];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              }
            }
          } else {
            if (f['app_opens_per_day'] <= 172.000000) {
              if (f['sleep_deficit'] <= 1.700000) {
                return [0.0, 1.0, 0.0];
              } else {
                return [0.0, 0.6, 0.4];
              }
            } else {
              return [0.0, 0.2857142857142857, 0.7142857142857143];
            }
          }
        } else {
          if (f['entertainment_share'] <= 0.976874) {
            if (f['gaming_hours'] <= 1.780000) {
              if (f['social_media_hours'] <= 4.050000) {
                return [0.0, 0.2, 0.8];
              } else {
                return [0.0, 0.0, 1.0];
              }
            } else {
              if (f['app_switch_index'] <= 11.596289) {
                if (f['notif_x_switch'] <= 1.227387) {
                  return [0.0, 0.25, 0.75];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              } else {
                if (f['app_opens_per_day'] <= 118.000000) {
                  return [0.0, 0.06666666666666667, 0.9333333333333333];
                } else {
                  return [0.0, 0.41379310344827586, 0.5862068965517241];
                }
              }
            }
          } else {
            if (f['gaming_hours'] <= 3.525000) {
              if (f['stress_x_screen'] <= 12.860000) {
                if (f['social_media_hours'] <= 4.185000) {
                  return [0.0, 0.2, 0.8];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              } else {
                return [0.0, 0.0, 1.0];
              }
            } else {
              if (f['daily_screen_time_hours'] <= 6.835000) {
                return [0.0, 0.625, 0.375];
              } else {
                return [0.0, 0.0, 1.0];
              }
            }
          }
        }
      } else {
        if (f['entertainment_share'] <= 0.758834) {
          if (f['notif_x_switch'] <= 2.989048) {
            if (f['sleep_hours'] <= 5.470000) {
              return [0.0, 0.6666666666666666, 0.3333333333333333];
            } else {
              return [0.0, 1.0, 0.0];
            }
          } else {
            return [0.0, 0.3333333333333333, 0.6666666666666666];
          }
        } else {
          if (f['screen_sleep_ratio'] <= 1.038034) {
            return [0.0, 0.3333333333333333, 0.6666666666666666];
          } else {
            return [0.0, 0.0, 1.0];
          }
        }
      }
    }
  } else {
    if (f['gaming_share'] <= 0.369148) {
      if (f['log_screen_time'] <= 2.197780) {
        if (f['entertainment_share'] <= 0.439358) {
          return [0.0, 0.3333333333333333, 0.6666666666666666];
        } else {
          return [0.0, 0.0, 1.0];
        }
      } else {
        return [0.0, 0.0, 1.0];
      }
    } else {
      if (f['weekend_x_screen'] <= 0.550000) {
        return [0.0, 0.3333333333333333, 0.6666666666666666];
      } else {
        return [0.0, 0.0, 1.0];
      }
    }
  }
}

function riskLevel3_tree_10(f) {
  if (f['notif_x_switch'] <= 3.830232) {
    if (f['weekend_screen_time'] <= 9.485000) {
      if (f['daily_screen_time_hours'] <= 6.005000) {
        if (f['app_switch_index'] <= 5.919258) {
          if (f['social_media_share'] <= 0.910387) {
            if (f['work_study_hours'] <= 0.695000) {
              if (f['social_media_share'] <= 0.680554) {
                return [0.6, 0.4, 0.0];
              } else {
                return [0.0, 0.0, 1.0];
              }
            } else {
              if (f['social_media_hours'] <= 4.050000) {
                if (f['weekend_screen_time'] <= 7.830000) {
                  return [0.7, 0.3, 0.0];
                } else {
                  return [0.18181818181818182, 0.8181818181818182, 0.0];
                }
              } else {
                return [0.0, 0.0, 1.0];
              }
            }
          } else {
            if (f['screen_sleep_ratio'] <= 0.558501) {
              return [0.1, 0.7, 0.2];
            } else {
              return [0.0, 0.0, 1.0];
            }
          }
        } else {
          if (f['daily_screen_time_hours'] <= 3.485000) {
            if (f['productivity_share'] <= 0.403022) {
              return [0.0, 0.75, 0.25];
            } else {
              if (f['social_media_share'] <= 0.920973) {
                return [0.6666666666666666, 0.3333333333333333, 0.0];
              } else {
                if (f['weekend_screen_time'] <= 4.990000) {
                  return [0.18181818181818182, 0.18181818181818182, 0.6363636363636364];
                } else {
                  return [0.038461538461538464, 0.038461538461538464, 0.9230769230769231];
                }
              }
            }
          } else {
            if (f['work_study_share'] <= 0.355860) {
              if (f['productivity_share'] <= 0.288797) {
                if (f['stress_x_screen'] <= 3.820000) {
                  return [0.16279069767441862, 0.20930232558139536, 0.627906976744186];
                } else {
                  return [0.3382352941176471, 0.47058823529411764, 0.19117647058823528];
                }
              } else {
                if (f['notification_load_index'] <= 24.961711) {
                  return [0.02857142857142857, 0.8857142857142857, 0.08571428571428572];
                } else {
                  return [0.0, 0.3333333333333333, 0.6666666666666666];
                }
              }
            } else {
              if (f['gaming_hours'] <= 2.300000) {
                if (f['social_media_hours'] <= 4.010000) {
                  return [0.36619718309859156, 0.6338028169014085, 0.0];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              } else {
                if (f['social_media_hours'] <= 4.015000) {
                  return [0.7010309278350515, 0.29896907216494845, 0.0];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              }
            }
          }
        }
      } else {
        if (f['social_media_hours'] <= 4.010000) {
          if (f['log_screen_time'] <= 2.194443) {
            if (f['work_study_share'] <= 0.228672) {
              if (f['screen_sleep_ratio'] <= 1.223369) {
                if (f['social_media_share'] <= 0.418831) {
                  return [0.0, 0.625, 0.375];
                } else {
                  return [0.0, 0.21052631578947367, 0.7894736842105263];
                }
              } else {
                if (f['gaming_hours'] <= 1.985000) {
                  return [0.0, 0.0, 1.0];
                } else {
                  return [0.0, 0.5714285714285714, 0.42857142857142855];
                }
              }
            } else {
              if (f['sleep_deficit'] <= 1.155000) {
                if (f['notif_x_switch'] <= 1.800021) {
                  return [0.0, 0.43243243243243246, 0.5675675675675675];
                } else {
                  return [0.0, 0.6236559139784946, 0.3763440860215054];
                }
              } else {
                if (f['weekend_x_screen'] <= 0.840000) {
                  return [0.0, 0.5454545454545454, 0.45454545454545453];
                } else {
                  return [0.0, 0.8174603174603174, 0.18253968253968253];
                }
              }
            }
          } else {
            if (f['daily_screen_time_hours'] <= 8.000000) {
              return [0.0, 0.2857142857142857, 0.7142857142857143];
            } else {
              return [0.0, 0.0, 1.0];
            }
          }
        } else {
          return [0.0, 0.0, 1.0];
        }
      }
    } else {
      if (f['daily_screen_time_hours'] <= 7.975000) {
        if (f['app_switch_index'] <= 4.419549) {
          if (f['notif_x_switch'] <= 0.311358) {
            if (f['app_switch_index'] <= 2.300937) {
              return [0.0, 0.6666666666666666, 0.3333333333333333];
            } else {
              return [0.0, 1.0, 0.0];
            }
          } else {
            if (f['sleep_hours'] <= 5.025000) {
              return [0.0, 1.0, 0.0];
            } else {
              if (f['app_opens_per_day'] <= 24.000000) {
                return [0.0, 0.0, 1.0];
              } else {
                return [0.0, 0.6666666666666666, 0.3333333333333333];
              }
            }
          }
        } else {
          if (f['sleep_deficit'] <= 0.770000) {
            if (f['social_media_hours'] <= 3.855000) {
              if (f['stress_x_screen'] <= 15.540000) {
                if (f['stress_level_enc'] <= 1.500000) {
                  return [0.0, 0.13513513513513514, 0.8648648648648649];
                } else {
                  return [0.0, 0.5555555555555556, 0.4444444444444444];
                }
              } else {
                return [0.0, 1.0, 0.0];
              }
            } else {
              return [0.0, 0.0, 1.0];
            }
          } else {
            if (f['screen_sleep_ratio'] <= 1.535003) {
              if (f['social_media_hours'] <= 3.720000) {
                if (f['gaming_hours'] <= 0.165000) {
                  return [0.0, 0.5, 0.5];
                } else {
                  return [0.0, 0.8837209302325582, 0.11627906976744186];
                }
              } else {
                if (f['work_study_share'] <= 0.721462) {
                  return [0.0, 0.0, 1.0];
                } else {
                  return [0.0, 0.3333333333333333, 0.6666666666666666];
                }
              }
            } else {
              if (f['social_media_hours'] <= 2.875000) {
                return [0.0, 0.2, 0.8];
              } else {
                return [0.0, 0.0, 1.0];
              }
            }
          }
        }
      } else {
        if (f['productivity_share'] <= 0.678748) {
          return [0.0, 0.0, 1.0];
        } else {
          if (f['gaming_share'] <= 0.092011) {
            return [0.0, 0.25, 0.75];
          } else {
            return [0.0, 0.0, 1.0];
          }
        }
      }
    }
  } else {
    if (f['daily_screen_time_hours'] <= 5.990000) {
      if (f['social_media_hours'] <= 4.005000) {
        if (f['gaming_hours'] <= 2.290000) {
          if (f['work_study_hours'] <= 2.720000) {
            if (f['sleep_deficit'] <= 2.935000) {
              if (f['log_screen_time'] <= 1.540087) {
                if (f['gaming_hours'] <= 1.950000) {
                  return [0.21739130434782608, 0.782608695652174, 0.0];
                } else {
                  return [0.8, 0.2, 0.0];
                }
              } else {
                if (f['work_study_hours'] <= 2.620000) {
                  return [0.5929203539823009, 0.40707964601769914, 0.0];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              }
            } else {
              return [0.0, 1.0, 0.0];
            }
          } else {
            if (f['work_study_hours'] <= 4.390000) {
              if (f['gaming_share'] <= 0.389746) {
                if (f['weekend_x_screen'] <= 2.845000) {
                  return [0.6739130434782609, 0.32608695652173914, 0.0];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              } else {
                if (f['daily_screen_time_hours'] <= 4.710000) {
                  return [1.0, 0.0, 0.0];
                } else {
                  return [0.8333333333333334, 0.16666666666666666, 0.0];
                }
              }
            } else {
              if (f['stress_level_enc'] <= 1.500000) {
                if (f['app_switch_index'] <= 30.227373) {
                  return [0.5254237288135594, 0.4745762711864407, 0.0];
                } else {
                  return [0.07692307692307693, 0.9230769230769231, 0.0];
                }
              } else {
                if (f['notifications_per_day'] <= 221.000000) {
                  return [0.825, 0.175, 0.0];
                } else {
                  return [0.3, 0.7, 0.0];
                }
              }
            }
          }
        } else {
          if (f['weekend_screen_time'] <= 8.405000) {
            if (f['notification_load_index'] <= 61.302586) {
              if (f['sleep_deficit'] <= 1.310000) {
                if (f['notif_x_switch'] <= 7.219823) {
                  return [0.3181818181818182, 0.6818181818181818, 0.0];
                } else {
                  return [0.5206611570247934, 0.4793388429752066, 0.0];
                }
              } else {
                if (f['log_screen_time'] <= 1.495139) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.32727272727272727, 0.6727272727272727, 0.0];
                }
              }
            } else {
              if (f['work_study_hours'] <= 2.740000) {
                return [1.0, 0.0, 0.0];
              } else {
                if (f['app_switch_index'] <= 21.368860) {
                  return [0.16666666666666666, 0.8333333333333334, 0.0];
                } else {
                  return [0.7272727272727273, 0.2727272727272727, 0.0];
                }
              }
            }
          } else {
            return [0.8571428571428571, 0.14285714285714285, 0.0];
          }
        }
      } else {
        return [0.0, 0.0, 1.0];
      }
    } else {
      if (f['weekend_screen_time'] <= 9.425000) {
        if (f['social_media_hours'] <= 3.985000) {
          if (f['screen_sleep_ratio'] <= 1.235871) {
            if (f['app_opens_per_day'] <= 110.000000) {
              if (f['social_media_share'] <= 0.298573) {
                return [0.0, 1.0, 0.0];
              } else {
                if (f['social_media_share'] <= 0.472754) {
                  return [0.0, 0.3333333333333333, 0.6666666666666666];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              }
            } else {
              if (f['age'] <= 20.500000) {
                if (f['stress_level_enc'] <= 0.500000) {
                  return [0.0, 0.3333333333333333, 0.6666666666666666];
                } else {
                  return [0.0, 0.8421052631578947, 0.15789473684210525];
                }
              } else {
                if (f['social_media_hours'] <= 0.970000) {
                  return [0.0, 0.6923076923076923, 0.3076923076923077];
                } else {
                  return [0.0, 0.15873015873015872, 0.8412698412698413];
                }
              }
            }
          } else {
            if (f['app_opens_per_day'] <= 150.500000) {
              if (f['social_media_share'] <= 0.332531) {
                if (f['social_media_hours'] <= 1.925000) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.0, 0.25, 0.75];
                }
              } else {
                return [0.0, 1.0, 0.0];
              }
            } else {
              if (f['social_media_hours'] <= 1.345000) {
                if (f['notifications_per_day'] <= 166.000000) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.0, 0.75, 0.25];
                }
              } else {
                if (f['daily_screen_time_hours'] <= 7.295000) {
                  return [0.0, 0.0, 1.0];
                } else {
                  return [0.0, 0.6666666666666666, 0.3333333333333333];
                }
              }
            }
          }
        } else {
          return [0.0, 0.0, 1.0];
        }
      } else {
        if (f['weekend_escalation'] <= 0.339200) {
          if (f['notifications_per_day'] <= 173.500000) {
            if (f['app_opens_per_day'] <= 169.500000) {
              return [0.0, 0.6666666666666666, 0.3333333333333333];
            } else {
              return [0.0, 0.0, 1.0];
            }
          } else {
            if (f['sleep_hours'] <= 8.760000) {
              return [0.0, 0.0, 1.0];
            } else {
              return [0.0, 0.3333333333333333, 0.6666666666666666];
            }
          }
        } else {
          if (f['social_media_hours'] <= 3.635000) {
            if (f['work_study_hours'] <= 2.025000) {
              return [0.0, 0.2, 0.8];
            } else {
              if (f['weekend_escalation'] <= 0.361357) {
                return [0.0, 0.6, 0.4];
              } else {
                return [0.0, 1.0, 0.0];
              }
            }
          } else {
            return [0.0, 0.0, 1.0];
          }
        }
      }
    }
  }
}

function riskLevel3_tree_11(f) {
  if (f['social_media_hours'] <= 4.005000) {
    if (f['daily_screen_time_hours'] <= 7.965000) {
      if (f['screen_sleep_ratio'] <= 0.784471) {
        if (f['log_screen_time'] <= 1.946624) {
          if (f['notif_x_switch'] <= 0.385009) {
            return [1.0, 0.0, 0.0];
          } else {
            if (f['weekend_x_screen'] <= 0.895000) {
              if (f['entertainment_share'] <= 0.959552) {
                if (f['daily_screen_time_hours'] <= 3.785000) {
                  return [0.13043478260869565, 0.8695652173913043, 0.0];
                } else {
                  return [0.5862068965517241, 0.41379310344827586, 0.0];
                }
              } else {
                if (f['sleep_hours'] <= 5.245000) {
                  return [0.1111111111111111, 0.8888888888888888, 0.0];
                } else {
                  return [0.7972972972972973, 0.20270270270270271, 0.0];
                }
              }
            } else {
              if (f['social_media_hours'] <= 1.305000) {
                if (f['notif_x_switch'] <= 8.918499) {
                  return [0.6328125, 0.3671875, 0.0];
                } else {
                  return [0.36538461538461536, 0.6346153846153846, 0.0];
                }
              } else {
                if (f['social_media_share'] <= 0.342121) {
                  return [0.10810810810810811, 0.8918918918918919, 0.0];
                } else {
                  return [0.4548736462093863, 0.5451263537906137, 0.0];
                }
              }
            }
          }
        } else {
          if (f['daily_screen_time_hours'] <= 6.060000) {
            return [0.0, 0.0, 1.0];
          } else {
            if (f['weekend_x_screen'] <= 0.670000) {
              return [0.0, 0.16666666666666666, 0.8333333333333334];
            } else {
              if (f['screen_sleep_ratio'] <= 0.735042) {
                if (f['weekend_x_screen'] <= 1.300000) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.0, 0.2631578947368421, 0.7368421052631579];
                }
              } else {
                if (f['sleep_hours'] <= 8.435000) {
                  return [0.0, 0.9166666666666666, 0.08333333333333333];
                } else {
                  return [0.0, 0.5454545454545454, 0.45454545454545453];
                }
              }
            }
          }
        }
      } else {
        if (f['log_screen_time'] <= 1.948048) {
          if (f['weekend_screen_time'] <= 5.815000) {
            if (f['weekend_x_screen'] <= 0.770000) {
              if (f['daily_screen_time_hours'] <= 4.815000) {
                if (f['productivity_share'] <= 0.925647) {
                  return [1.0, 0.0, 0.0];
                } else {
                  return [0.75, 0.25, 0.0];
                }
              } else {
                return [0.16666666666666666, 0.8333333333333334, 0.0];
              }
            } else {
              if (f['notification_load_index'] <= 42.727272) {
                if (f['gaming_share'] <= 0.664356) {
                  return [0.034482758620689655, 0.9655172413793104, 0.0];
                } else {
                  return [0.6666666666666666, 0.3333333333333333, 0.0];
                }
              } else {
                return [0.75, 0.25, 0.0];
              }
            }
          } else {
            if (f['app_switch_index'] <= 18.536173) {
              if (f['notif_x_switch'] <= 0.551571) {
                if (f['social_media_hours'] <= 3.015000) {
                  return [1.0, 0.0, 0.0];
                } else {
                  return [0.6666666666666666, 0.3333333333333333, 0.0];
                }
              } else {
                if (f['weekend_screen_time'] <= 6.355000) {
                  return [0.6170212765957447, 0.3829787234042553, 0.0];
                } else {
                  return [0.25203252032520324, 0.7479674796747967, 0.0];
                }
              }
            } else {
              if (f['log_screen_time'] <= 1.626271) {
                return [0.0, 1.0, 0.0];
              } else {
                if (f['notification_load_index'] <= 32.099897) {
                  return [0.5444444444444444, 0.45555555555555555, 0.0];
                } else {
                  return [0.7352941176470589, 0.2647058823529412, 0.0];
                }
              }
            }
          }
        } else {
          if (f['work_study_hours'] <= 1.565000) {
            if (f['work_study_share'] <= 0.115020) {
              if (f['productivity_share'] <= 0.109305) {
                if (f['notifications_per_day'] <= 36.000000) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.0, 0.45454545454545453, 0.5454545454545454];
                }
              } else {
                return [0.0, 1.0, 0.0];
              }
            } else {
              if (f['social_media_hours'] <= 1.125000) {
                if (f['entertainment_share'] <= 0.383089) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.0, 0.2857142857142857, 0.7142857142857143];
                }
              } else {
                if (f['gaming_hours'] <= 1.380000) {
                  return [0.0, 0.12121212121212122, 0.8787878787878788];
                } else {
                  return [0.0, 0.3492063492063492, 0.6507936507936508];
                }
              }
            }
          } else {
            if (f['weekend_screen_time'] <= 9.875000) {
              if (f['stress_x_screen'] <= 13.670000) {
                if (f['work_study_share'] <= 0.821264) {
                  return [0.0, 0.6603260869565217, 0.33967391304347827];
                } else {
                  return [0.0, 0.43103448275862066, 0.5689655172413793];
                }
              } else {
                if (f['stress_x_screen'] <= 15.440000) {
                  return [0.0, 0.32051282051282054, 0.6794871794871795];
                } else {
                  return [0.0, 0.9411764705882353, 0.058823529411764705];
                }
              }
            } else {
              if (f['notifications_per_day'] <= 216.000000) {
                if (f['app_opens_per_day'] <= 47.500000) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.0, 0.7647058823529411, 0.23529411764705882];
                }
              } else {
                return [0.0, 0.2, 0.8];
              }
            }
          }
        }
      }
    } else {
      if (f['weekend_screen_time'] <= 10.815000) {
        if (f['log_screen_time'] <= 2.194443) {
          return [0.0, 0.375, 0.625];
        } else {
          if (f['daily_screen_time_hours'] <= 8.010000) {
            if (f['sleep_deficit'] <= 0.025000) {
              return [0.0, 0.0, 1.0];
            } else {
              return [0.0, 0.3333333333333333, 0.6666666666666666];
            }
          } else {
            return [0.0, 0.0, 1.0];
          }
        }
      } else {
        return [0.0, 0.0, 1.0];
      }
    }
  } else {
    return [0.0, 0.0, 1.0];
  }
}

function riskLevel3_tree_12(f) {
  if (f['log_screen_time'] <= 2.194443) {
    if (f['screen_sleep_ratio'] <= 0.880248) {
      if (f['entertainment_share'] <= 0.998551) {
        if (f['stress_x_screen'] <= 12.350000) {
          if (f['app_switch_index'] <= 25.218449) {
            if (f['social_media_hours'] <= 4.000000) {
              if (f['screen_sleep_ratio'] <= 0.670047) {
                if (f['work_study_hours'] <= 5.035000) {
                  return [0.6044776119402985, 0.39552238805970147, 0.0];
                } else {
                  return [0.9259259259259259, 0.07407407407407407, 0.0];
                }
              } else {
                if (f['gaming_hours'] <= 0.520000) {
                  return [0.5714285714285715, 0.326530612244898, 0.10204081632653063];
                } else {
                  return [0.23574144486692014, 0.5893536121673004, 0.17490494296577946];
                }
              }
            } else {
              return [0.0, 0.0, 1.0];
            }
          } else {
            if (f['notification_load_index'] <= 11.288876) {
              if (f['social_media_hours'] <= 2.910000) {
                if (f['daily_screen_time_hours'] <= 3.780000) {
                  return [0.75, 0.25, 0.0];
                } else {
                  return [0.10810810810810811, 0.8648648648648649, 0.02702702702702703];
                }
              } else {
                return [0.75, 0.25, 0.0];
              }
            } else {
              if (f['weekend_escalation'] <= 0.633433) {
                if (f['social_media_hours'] <= 1.150000) {
                  return [0.4523809523809524, 0.5238095238095238, 0.023809523809523808];
                } else {
                  return [0.6902654867256637, 0.2831858407079646, 0.02654867256637168];
                }
              } else {
                if (f['weekend_screen_time'] <= 6.430000) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.5555555555555556, 0.4444444444444444, 0.0];
                }
              }
            }
          }
        } else {
          if (f['entertainment_share'] <= 0.156989) {
            return [0.0, 0.8333333333333334, 0.16666666666666666];
          } else {
            if (f['work_study_share'] <= 0.148857) {
              return [0.0, 0.75, 0.25];
            } else {
              if (f['app_opens_per_day'] <= 133.500000) {
                if (f['stress_x_screen'] <= 12.570000) {
                  return [0.0, 0.4, 0.6];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              } else {
                return [0.0, 0.8, 0.2];
              }
            }
          }
        }
      } else {
        if (f['gaming_share'] <= 0.543878) {
          if (f['sleep_deficit'] <= 1.155000) {
            if (f['log_screen_time'] <= 1.459771) {
              if (f['social_media_hours'] <= 3.855000) {
                if (f['work_study_hours'] <= 1.855000) {
                  return [0.2, 0.8, 0.0];
                } else {
                  return [0.8235294117647058, 0.17647058823529413, 0.0];
                }
              } else {
                return [0.0, 0.0, 1.0];
              }
            } else {
              if (f['gaming_hours'] <= 1.680000) {
                if (f['log_screen_time'] <= 1.591272) {
                  return [0.125, 0.0625, 0.8125];
                } else {
                  return [0.017241379310344827, 0.0, 0.9827586206896551];
                }
              } else {
                if (f['social_media_share'] <= 0.714630) {
                  return [0.3191489361702128, 0.3829787234042553, 0.2978723404255319];
                } else {
                  return [0.03278688524590164, 0.01639344262295082, 0.9508196721311475];
                }
              }
            }
          } else {
            if (f['screen_sleep_ratio'] <= 0.713318) {
              if (f['daily_screen_time_hours'] <= 3.135000) {
                if (f['work_study_share'] <= 0.732232) {
                  return [0.0, 0.0, 1.0];
                } else {
                  return [0.25, 0.0, 0.75];
                }
              } else {
                if (f['social_media_share'] <= 0.987374) {
                  return [0.5, 0.5, 0.0];
                } else {
                  return [0.23333333333333334, 0.2, 0.5666666666666667];
                }
              }
            } else {
              if (f['social_media_hours'] <= 3.985000) {
                if (f['sleep_deficit'] <= 2.475000) {
                  return [0.8, 0.2, 0.0];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              } else {
                return [0.0, 0.0, 1.0];
              }
            }
          }
        } else {
          if (f['social_media_share'] <= 0.986208) {
            if (f['daily_screen_time_hours'] <= 4.735000) {
              if (f['daily_screen_time_hours'] <= 4.115000) {
                if (f['app_switch_index'] <= 6.753675) {
                  return [0.8666666666666667, 0.13333333333333333, 0.0];
                } else {
                  return [0.3968253968253968, 0.6031746031746031, 0.0];
                }
              } else {
                if (f['stress_x_screen'] <= 4.315000) {
                  return [0.7647058823529411, 0.14705882352941177, 0.08823529411764706];
                } else {
                  return [0.42857142857142855, 0.5306122448979592, 0.04081632653061224];
                }
              }
            } else {
              if (f['stress_x_screen'] <= 5.420000) {
                if (f['gender_enc'] <= 0.500000) {
                  return [0.3076923076923077, 0.6153846153846154, 0.07692307692307693];
                } else {
                  return [0.09090909090909091, 0.12121212121212122, 0.7878787878787878];
                }
              } else {
                if (f['stress_x_screen'] <= 11.730000) {
                  return [0.574468085106383, 0.19148936170212766, 0.23404255319148937];
                } else {
                  return [0.0, 0.3333333333333333, 0.6666666666666666];
                }
              }
            }
          } else {
            if (f['weekend_screen_time'] <= 5.795000) {
              if (f['gender_enc'] <= 0.500000) {
                if (f['app_opens_per_day'] <= 90.000000) {
                  return [0.4166666666666667, 0.08333333333333333, 0.5];
                } else {
                  return [0.15151515151515152, 0.06060606060606061, 0.7878787878787878];
                }
              } else {
                if (f['log_screen_time'] <= 1.475906) {
                  return [0.04878048780487805, 0.1951219512195122, 0.7560975609756098];
                } else {
                  return [0.0, 0.03409090909090909, 0.9659090909090909];
                }
              }
            } else {
              if (f['gaming_hours'] <= 2.285000) {
                return [0.3333333333333333, 0.0, 0.6666666666666666];
              } else {
                return [0.0, 0.0, 1.0];
              }
            }
          }
        }
      }
    } else {
      if (f['log_screen_time'] <= 1.938022) {
        if (f['notification_load_index'] <= 49.899193) {
          if (f['age'] <= 24.500000) {
            if (f['weekend_escalation'] <= 0.305812) {
              if (f['weekend_escalation'] <= 0.275480) {
                if (f['notif_x_switch'] <= 1.073390) {
                  return [0.14285714285714285, 0.0, 0.8571428571428571];
                } else {
                  return [0.5641025641025641, 0.15384615384615385, 0.28205128205128205];
                }
              } else {
                return [0.2857142857142857, 0.7142857142857143, 0.0];
              }
            } else {
              if (f['screen_sleep_ratio'] <= 0.962364) {
                if (f['notif_x_switch'] <= 1.164010) {
                  return [0.25, 0.0, 0.75];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              } else {
                if (f['entertainment_share'] <= 0.889952) {
                  return [0.5, 0.5, 0.0];
                } else {
                  return [0.08, 0.12, 0.8];
                }
              }
            }
          } else {
            if (f['stress_x_screen'] <= 11.730000) {
              if (f['social_media_hours'] <= 4.040000) {
                if (f['gaming_share'] <= 0.542253) {
                  return [0.4049586776859504, 0.5950413223140496, 0.0];
                } else {
                  return [0.7, 0.3, 0.0];
                }
              } else {
                return [0.0, 0.0, 1.0];
              }
            } else {
              return [0.0, 1.0, 0.0];
            }
          }
        } else {
          if (f['screen_sleep_ratio'] <= 0.943535) {
            return [0.0, 1.0, 0.0];
          } else {
            return [0.25, 0.75, 0.0];
          }
        }
      } else {
        if (f['social_media_share'] <= 0.550605) {
          if (f['screen_sleep_ratio'] <= 0.993873) {
            if (f['weekend_x_screen'] <= 1.055000) {
              if (f['screen_sleep_ratio'] <= 0.962145) {
                if (f['gaming_hours'] <= 1.020000) {
                  return [0.0, 0.0, 1.0];
                } else {
                  return [0.14285714285714288, 0.5714285714285715, 0.28571428571428575];
                }
              } else {
                return [0.0, 0.0, 1.0];
              }
            } else {
              if (f['notification_load_index'] <= 29.629643) {
                if (f['weekend_screen_time'] <= 7.790000) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.0, 0.32673267326732675, 0.6732673267326733];
                }
              } else {
                if (f['notif_x_switch'] <= 3.523465) {
                  return [0.0, 0.8333333333333334, 0.16666666666666666];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              }
            }
          } else {
            if (f['weekend_x_screen'] <= 2.660000) {
              if (f['weekend_escalation'] <= 0.078208) {
                return [0.0, 0.0, 1.0];
              } else {
                if (f['work_study_share'] <= 0.456089) {
                  return [0.0, 0.520618556701031, 0.4793814432989691];
                } else {
                  return [0.005, 0.695, 0.3];
                }
              }
            } else {
              if (f['gaming_hours'] <= 3.445000) {
                if (f['work_study_share'] <= 0.620750) {
                  return [0.0, 0.8333333333333334, 0.16666666666666666];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              } else {
                if (f['gaming_hours'] <= 3.630000) {
                  return [0.0, 0.2, 0.8];
                } else {
                  return [0.0, 0.3333333333333333, 0.6666666666666666];
                }
              }
            }
          }
        } else {
          if (f['social_media_share'] <= 0.635068) {
            if (f['weekend_escalation'] <= 0.387023) {
              if (f['social_media_hours'] <= 3.955000) {
                if (f['work_study_hours'] <= 2.740000) {
                  return [0.0, 0.0, 1.0];
                } else {
                  return [0.0, 0.5, 0.5];
                }
              } else {
                return [0.0, 0.0, 1.0];
              }
            } else {
              if (f['notification_load_index'] <= 20.688170) {
                return [0.0, 0.0, 1.0];
              } else {
                return [0.0, 0.6666666666666666, 0.3333333333333333];
              }
            }
          } else {
            return [0.0, 0.0, 1.0];
          }
        }
      }
    }
  } else {
    if (f['daily_screen_time_hours'] <= 8.005000) {
      if (f['academic_work_impact_enc'] <= 0.500000) {
        if (f['social_media_hours'] <= 3.835000) {
          return [0.0, 0.5, 0.5];
        } else {
          return [0.0, 0.0, 1.0];
        }
      } else {
        return [0.0, 0.0, 1.0];
      }
    } else {
      return [0.0, 0.0, 1.0];
    }
  }
}

function riskLevel3_tree_13(f) {
  if (f['work_study_share'] <= 0.651855) {
    if (f['log_screen_time'] <= 2.194443) {
      if (f['social_media_share'] <= 0.649009) {
        if (f['notification_load_index'] <= 35.077969) {
          if (f['weekend_screen_time'] <= 7.455000) {
            if (f['notifications_per_day'] <= 178.000000) {
              if (f['sleep_hours'] <= 5.755000) {
                if (f['weekend_escalation'] <= 0.118274) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.6896551724137931, 0.3103448275862069, 0.0];
                }
              } else {
                if (f['notif_x_switch'] <= 0.922123) {
                  return [0.05555555555555555, 0.9444444444444444, 0.0];
                } else {
                  return [0.37777777777777777, 0.5555555555555556, 0.06666666666666667];
                }
              }
            } else {
              if (f['notification_load_index'] <= 33.577063) {
                return [0.0, 0.0, 1.0];
              } else {
                return [0.5, 0.5, 0.0];
              }
            }
          } else {
            if (f['work_study_share'] <= 0.626479) {
              if (f['weekend_escalation'] <= 0.386866) {
                if (f['log_screen_time'] <= 1.938725) {
                  return [0.6666666666666666, 0.3333333333333333, 0.0];
                } else {
                  return [0.0, 0.46286701208981, 0.5371329879101899];
                }
              } else {
                if (f['productivity_share'] <= 0.240860) {
                  return [0.14634146341463414, 0.4634146341463415, 0.3902439024390244];
                } else {
                  return [0.1348314606741573, 0.7528089887640449, 0.11235955056179775];
                }
              }
            } else {
              if (f['daily_screen_time_hours'] <= 6.840000) {
                return [0.0, 0.875, 0.125];
              } else {
                if (f['gaming_hours'] <= 0.795000) {
                  return [0.0, 0.3333333333333333, 0.6666666666666666];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              }
            }
          }
        } else {
          if (f['gender_enc'] <= 0.500000) {
            if (f['weekend_screen_time'] <= 5.860000) {
              if (f['social_media_share'] <= 0.302970) {
                return [0.6, 0.4, 0.0];
              } else {
                return [0.0, 1.0, 0.0];
              }
            } else {
              if (f['log_screen_time'] <= 1.956357) {
                if (f['age'] <= 24.000000) {
                  return [0.9333333333333333, 0.06666666666666667, 0.0];
                } else {
                  return [0.7, 0.3, 0.0];
                }
              } else {
                return [0.0, 0.5714285714285714, 0.42857142857142855];
              }
            }
          } else {
            if (f['notifications_per_day'] <= 184.500000) {
              if (f['notif_x_switch'] <= 13.377232) {
                if (f['low_sleep'] <= 0.500000) {
                  return [1.0, 0.0, 0.0];
                } else {
                  return [0.6, 0.4, 0.0];
                }
              } else {
                return [0.0, 1.0, 0.0];
              }
            } else {
              if (f['app_opens_per_day'] <= 134.000000) {
                if (f['social_media_hours'] <= 1.370000) {
                  return [0.375, 0.625, 0.0];
                } else {
                  return [0.09523809523809523, 0.8809523809523809, 0.023809523809523808];
                }
              } else {
                if (f['notification_load_index'] <= 36.813097) {
                  return [0.16666666666666666, 0.0, 0.8333333333333334];
                } else {
                  return [0.5, 0.5, 0.0];
                }
              }
            }
          }
        }
      } else {
        if (f['social_media_hours'] <= 4.005000) {
          if (f['weekend_escalation'] <= 0.291437) {
            if (f['work_study_hours'] <= 1.430000) {
              if (f['notification_load_index'] <= 35.334471) {
                if (f['sleep_deficit'] <= 0.940000) {
                  return [1.0, 0.0, 0.0];
                } else {
                  return [0.5, 0.5, 0.0];
                }
              } else {
                if (f['social_media_share'] <= 0.781245) {
                  return [0.4, 0.6, 0.0];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              }
            } else {
              if (f['social_media_share'] <= 0.814201) {
                if (f['social_media_hours'] <= 3.845000) {
                  return [0.6428571428571429, 0.35714285714285715, 0.0];
                } else {
                  return [1.0, 0.0, 0.0];
                }
              } else {
                return [1.0, 0.0, 0.0];
              }
            }
          } else {
            if (f['sleep_deficit'] <= 0.030000) {
              if (f['social_media_share'] <= 0.714531) {
                if (f['productivity_share'] <= 0.572181) {
                  return [0.0, 1.0, 0.0];
                } else {
                  return [0.6, 0.4, 0.0];
                }
              } else {
                if (f['work_study_share'] <= 0.321341) {
                  return [0.45454545454545453, 0.5454545454545454, 0.0];
                } else {
                  return [0.8888888888888888, 0.1111111111111111, 0.0];
                }
              }
            } else {
              if (f['age'] <= 19.500000) {
                return [0.625, 0.375, 0.0];
              } else {
                if (f['work_study_hours'] <= 0.710000) {
                  return [0.7142857142857143, 0.2857142857142857, 0.0];
                } else {
                  return [0.136986301369863, 0.863013698630137, 0.0];
                }
              }
            }
          }
        } else {
          return [0.0, 0.0, 1.0];
        }
      }
    } else {
      if (f['gaming_share'] <= 0.369092) {
        return [0.0, 0.0, 1.0];
      } else {
        if (f['gaming_share'] <= 0.369611) {
          return [0.0, 0.2, 0.8];
        } else {
          return [0.0, 0.0, 1.0];
        }
      }
    }
  } else {
    if (f['daily_screen_time_hours'] <= 5.990000) {
      if (f['productivity_share'] <= 0.659642) {
        if (f['work_study_share'] <= 0.654696) {
          return [0.5, 0.25, 0.25];
        } else {
          if (f['weekend_escalation'] <= 0.199447) {
            return [0.4, 0.6, 0.0];
          } else {
            return [0.0, 1.0, 0.0];
          }
        }
      } else {
        if (f['social_media_hours'] <= 4.005000) {
          if (f['sleep_hours'] <= 8.945000) {
            if (f['screen_sleep_ratio'] <= 0.983070) {
              if (f['work_study_share'] <= 0.875116) {
                if (f['notifications_per_day'] <= 172.500000) {
                  return [0.5298507462686567, 0.4701492537313433, 0.0];
                } else {
                  return [0.7875, 0.2125, 0.0];
                }
              } else {
                if (f['work_study_share'] <= 0.958182) {
                  return [0.24242424242424243, 0.7575757575757576, 0.0];
                } else {
                  return [0.5179640718562875, 0.4820359281437126, 0.0];
                }
              }
            } else {
              if (f['work_study_share'] <= 0.745654) {
                if (f['social_media_share'] <= 0.262775) {
                  return [1.0, 0.0, 0.0];
                } else {
                  return [0.16666666666666666, 0.8333333333333334, 0.0];
                }
              } else {
                if (f['sleep_hours'] <= 5.000000) {
                  return [0.3333333333333333, 0.6666666666666666, 0.0];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              }
            }
          } else {
            if (f['work_study_share'] <= 0.896022) {
              return [0.25, 0.75, 0.0];
            } else {
              return [0.0, 1.0, 0.0];
            }
          }
        } else {
          return [0.0, 0.0, 1.0];
        }
      }
    } else {
      if (f['work_study_share'] <= 0.898880) {
        if (f['work_study_hours'] <= 5.555000) {
          if (f['stress_x_screen'] <= 7.955000) {
            if (f['stress_x_screen'] <= 7.200000) {
              if (f['entertainment_share'] <= 0.879536) {
                if (f['weekend_x_screen'] <= 2.055000) {
                  return [0.0, 0.6984126984126984, 0.30158730158730157];
                } else {
                  return [0.0, 0.2903225806451613, 0.7096774193548387];
                }
              } else {
                if (f['weekend_screen_time'] <= 7.455000) {
                  return [0.08333333333333333, 0.3333333333333333, 0.5833333333333334];
                } else {
                  return [0.0, 0.08196721311475409, 0.9180327868852459];
                }
              }
            } else {
              return [0.0, 1.0, 0.0];
            }
          } else {
            if (f['notification_load_index'] <= 3.625431) {
              return [0.0, 0.6666666666666666, 0.3333333333333333];
            } else {
              if (f['app_opens_per_day'] <= 168.000000) {
                if (f['weekend_screen_time'] <= 9.955000) {
                  return [0.0, 0.07142857142857142, 0.9285714285714286];
                } else {
                  return [0.0, 0.625, 0.375];
                }
              } else {
                return [0.0, 0.5714285714285714, 0.42857142857142855];
              }
            }
          }
        } else {
          if (f['work_study_share'] <= 0.727075) {
            return [0.0, 0.0, 1.0];
          } else {
            if (f['gaming_hours'] <= 3.855000) {
              if (f['gaming_share'] <= 0.087079) {
                if (f['notifications_per_day'] <= 140.000000) {
                  return [0.0, 0.0, 1.0];
                } else {
                  return [0.0, 1.0, 0.0];
                }
              } else {
                if (f['social_media_hours'] <= 4.005000) {
                  return [0.0, 0.25, 0.75];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              }
            } else {
              return [0.0, 1.0, 0.0];
            }
          }
        }
      } else {
        if (f['gaming_share'] <= 0.288651) {
          return [0.0, 0.14285714285714285, 0.8571428571428571];
        } else {
          if (f['work_study_hours'] <= 5.865000) {
            return [0.0, 1.0, 0.0];
          } else {
            return [0.0, 0.0, 1.0];
          }
        }
      }
    }
  }
}

function riskLevel3_tree_14(f) {
  if (f['log_screen_time'] <= 2.194443) {
    if (f['screen_sleep_ratio'] <= 0.790034) {
      if (f['social_media_hours'] <= 4.005000) {
        if (f['notification_load_index'] <= 70.560856) {
          if (f['screen_sleep_ratio'] <= 0.770954) {
            if (f['work_study_hours'] <= 5.105000) {
              if (f['app_switch_index'] <= 5.279425) {
                if (f['screen_sleep_ratio'] <= 0.720428) {
                  return [0.8918918918918919, 0.10810810810810811, 0.0];
                } else {
                  return [0.125, 0.5, 0.375];
                }
              } else {
                if (f['work_study_hours'] <= 4.785000) {
                  return [0.41906202723146746, 0.5703479576399395, 0.01059001512859304];
                } else {
                  return [0.14285714285714285, 0.8571428571428571, 0.0];
                }
              }
            } else {
              if (f['log_screen_time'] <= 1.720954) {
                if (f['screen_sleep_ratio'] <= 0.514497) {
                  return [0.4444444444444444, 0.5555555555555556, 0.0];
                } else {
                  return [0.8181818181818182, 0.18181818181818182, 0.0];
                }
              } else {
                if (f['age'] <= 28.500000) {
                  return [0.21212121212121213, 0.7272727272727273, 0.06060606060606061];
                } else {
                  return [0.7407407407407407, 0.25925925925925924, 0.0];
                }
              }
            }
          } else {
            if (f['gaming_hours'] <= 0.425000) {
              if (f['sleep_hours'] <= 7.745000) {
                return [1.0, 0.0, 0.0];
              } else {
                return [0.0, 0.0, 1.0];
              }
            } else {
              if (f['log_screen_time'] <= 1.954409) {
                if (f['log_screen_time'] <= 1.839748) {
                  return [0.55, 0.45, 0.0];
                } else {
                  return [1.0, 0.0, 0.0];
                }
              } else {
                if (f['gaming_hours'] <= 1.745000) {
                  return [0.0, 0.5, 0.5];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              }
            }
          }
        } else {
          if (f['gaming_hours'] <= 2.725000) {
            if (f['daily_screen_time_hours'] <= 3.240000) {
              return [1.0, 0.0, 0.0];
            } else {
              return [0.8, 0.2, 0.0];
            }
          } else {
            return [0.5555555555555556, 0.4444444444444444, 0.0];
          }
        }
      } else {
        return [0.0, 0.0, 1.0];
      }
    } else {
      if (f['daily_screen_time_hours'] <= 5.975000) {
        if (f['notification_load_index'] <= 4.698696) {
          if (f['daily_screen_time_hours'] <= 5.680000) {
            return [1.0, 0.0, 0.0];
          } else {
            return [0.6666666666666666, 0.3333333333333333, 0.0];
          }
        } else {
          if (f['app_switch_index'] <= 17.453500) {
            if (f['gaming_hours'] <= 2.605000) {
              if (f['social_media_hours'] <= 3.990000) {
                if (f['weekend_escalation'] <= 0.152809) {
                  return [1.0, 0.0, 0.0];
                } else {
                  return [0.24347826086956523, 0.7565217391304347, 0.0];
                }
              } else {
                return [0.0, 0.0, 1.0];
              }
            } else {
              if (f['entertainment_share'] <= 0.998198) {
                if (f['log_screen_time'] <= 1.877936) {
                  return [0.3333333333333333, 0.6666666666666666, 0.0];
                } else {
                  return [0.7777777777777778, 0.2222222222222222, 0.0];
                }
              } else {
                if (f['gaming_share'] <= 0.690522) {
                  return [0.14285714285714285, 0.10714285714285714, 0.75];
                } else {
                  return [0.23529411764705882, 0.5294117647058824, 0.23529411764705882];
                }
              }
            }
          } else {
            if (f['weekend_escalation'] <= 0.139675) {
              if (f['notifications_per_day'] <= 191.000000) {
                return [0.0, 1.0, 0.0];
              } else {
                return [0.0, 0.75, 0.25];
              }
            } else {
              if (f['weekend_escalation'] <= 0.174695) {
                return [1.0, 0.0, 0.0];
              } else {
                if (f['entertainment_share'] <= 0.997881) {
                  return [0.5576923076923077, 0.375, 0.0673076923076923];
                } else {
                  return [0.20161290322580644, 0.20967741935483872, 0.5887096774193549];
                }
              }
            }
          }
        }
      } else {
        if (f['notification_load_index'] <= 17.983459) {
          if (f['social_media_share'] <= 0.519337) {
            if (f['daily_screen_time_hours'] <= 7.625000) {
              if (f['notification_load_index'] <= 13.815189) {
                if (f['sleep_hours'] <= 6.475000) {
                  return [0.0, 0.5942028985507246, 0.4057971014492754];
                } else {
                  return [0.0, 0.30158730158730157, 0.6984126984126984];
                }
              } else {
                if (f['work_study_hours'] <= 2.930000) {
                  return [0.0, 0.9459459459459459, 0.05405405405405406];
                } else {
                  return [0.0, 0.5714285714285714, 0.42857142857142855];
                }
              }
            } else {
              if (f['screen_sleep_ratio'] <= 1.557037) {
                if (f['notif_x_switch'] <= 2.474940) {
                  return [0.0, 0.8607594936708861, 0.13924050632911392];
                } else {
                  return [0.0, 0.3, 0.7];
                }
              } else {
                return [0.0, 0.0, 1.0];
              }
            }
          } else {
            if (f['entertainment_share'] <= 0.673592) {
              if (f['app_switch_index'] <= 14.231645) {
                return [0.0, 0.0, 1.0];
              } else {
                if (f['sleep_hours'] <= 5.645000) {
                  return [0.0, 0.6666666666666666, 0.3333333333333333];
                } else {
                  return [0.0, 0.8, 0.2];
                }
              }
            } else {
              if (f['weekend_escalation'] <= 0.433206) {
                if (f['social_media_share'] <= 0.572069) {
                  return [0.0, 0.19047619047619047, 0.8095238095238095];
                } else {
                  return [0.0, 0.010416666666666666, 0.9895833333333334];
                }
              } else {
                return [0.0, 0.6, 0.4];
              }
            }
          }
        } else {
          if (f['entertainment_share'] <= 0.907304) {
            if (f['social_media_share'] <= 0.557407) {
              if (f['app_switch_index'] <= 17.845879) {
                if (f['daily_screen_time_hours'] <= 6.965000) {
                  return [0.0, 0.6728971962616822, 0.32710280373831774];
                } else {
                  return [0.0, 0.42138364779874216, 0.5786163522012578];
                }
              } else {
                if (f['log_screen_time'] <= 2.068750) {
                  return [0.0, 0.1111111111111111, 0.8888888888888888];
                } else {
                  return [0.0, 0.4406779661016949, 0.559322033898305];
                }
              }
            } else {
              return [0.0, 0.0, 1.0];
            }
          } else {
            if (f['age'] <= 22.500000) {
              if (f['work_study_hours'] <= 5.175000) {
                if (f['weekend_screen_time'] <= 8.275000) {
                  return [0.0, 0.3, 0.7];
                } else {
                  return [0.0, 0.0, 1.0];
                }
              } else {
                return [0.0, 0.8, 0.2];
              }
            } else {
              if (f['gaming_share'] <= 0.602170) {
                if (f['work_study_share'] <= 0.114163) {
                  return [0.0, 0.6, 0.4];
                } else {
                  return [0.0, 0.006944444444444444, 0.9930555555555556];
                }
              } else {
                return [0.0, 0.5, 0.5];
              }
            }
          }
        }
      }
    }
  } else {
    if (f['weekend_screen_time'] <= 8.635000) {
      return [0.0, 0.4, 0.6];
    } else {
      return [0.0, 0.0, 1.0];
    }
  }
}

function riskLevel3_predict_proba(f) {
  const treeFns = [riskLevel3_tree_0, riskLevel3_tree_1, riskLevel3_tree_2, riskLevel3_tree_3, riskLevel3_tree_4, riskLevel3_tree_5, riskLevel3_tree_6, riskLevel3_tree_7, riskLevel3_tree_8, riskLevel3_tree_9, riskLevel3_tree_10, riskLevel3_tree_11, riskLevel3_tree_12, riskLevel3_tree_13, riskLevel3_tree_14];
  const nClasses = 3;
  const sums = new Array(nClasses).fill(0);
  for (const fn of treeFns) {
    const p = fn(f);
    for (let c = 0; c < nClasses; c++) sums[c] += p[c];
  }
  return sums.map(s => s / treeFns.length);
}


const MODEL_FEATURE_ORDER = ["age", "daily_screen_time_hours", "social_media_hours", "gaming_hours", "work_study_hours", "sleep_hours", "notifications_per_day", "app_opens_per_day", "weekend_screen_time", "social_media_share", "gaming_share", "work_study_share", "entertainment_share", "productivity_share", "app_switch_index", "notification_load_index", "weekend_escalation", "low_sleep", "sleep_deficit", "screen_sleep_ratio", "log_screen_time", "notif_x_switch", "weekend_x_screen", "stress_x_screen", "gender_enc", "stress_level_enc", "academic_work_impact_enc"];
const RISK3_CLASS_NAMES = ['None', 'Mild', 'High'];