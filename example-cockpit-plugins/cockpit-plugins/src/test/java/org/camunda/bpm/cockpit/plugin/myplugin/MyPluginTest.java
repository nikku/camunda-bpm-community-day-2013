package org.camunda.bpm.cockpit.plugin.myplugin;


import org.camunda.bpm.cockpit.Cockpit;
import org.camunda.bpm.cockpit.plugin.spi.CockpitPlugin;
import org.camunda.bpm.cockpit.plugin.test.AbstractCockpitPluginTest;
import org.junit.Test;

import org.junit.Assert;

/**
 *
 * @author nico.rehwaldt
 */
public class MyPluginTest extends AbstractCockpitPluginTest {

  @Test
  public void testPluginDiscovery() {
    CockpitPlugin samplePlugin = Cockpit.getRuntimeDelegate().getPluginRegistry().getPlugin("myplugin");

    Assert.assertNotNull(samplePlugin);
  }
}
